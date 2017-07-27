
    <?php
   $site = get_blog_details() -> path;
   $language = $site == '/fr/' ? 'fr' : 'en';
   $chapter = "Chapter";
   if($language == "fr"){
      $chapter ="CHAPITRE";
   }

$series_label = get_field('series_label','options');

if(!$series_label){
    $series_label = "More from this series:";
}

   $this_article_id = $post->ID;
   $override = get_field('override_series_articles');
   if($override == "Yes"){
   	$manual_posts = get_field('manually_chosen_series_articles');
   }
   	$series = get_field('is_part_of_series');
   
   $series_posts = array();

   function center_array($arr,$len,$ind){
   	 // return array of $len with items
   	
   	
   	array_splice($arr,$ind,1);
   	
	   	if($len < count($arr)){
	   		$halflen = floor($len * 0.5);
	   		$offset = max([$ind - $halflen,0]);
	   		$offset = min([$offset,count($arr)-$len]);
	   		$arr = array_slice($arr,$offset,$len);
	   	}
	   	
   		return $arr;
   }

   #center_array(["A","B","C","D","E","F"],3,3);
/*   assert(center_array(["A","B","C","D","E","F"],3,3) == ["C","E","F"]);
   assert(center_array(["A","B","C","D","E","F"],5,0) == ["B","C","D","E","F"]);
   assert(center_array(["A","B","C","D","E","F"],5,5) == ["A","B","C","D","E"]);
   assert(center_array(["A","B","C","D","E","F"],5,2) == ["A","B","D","E","F"]);
   assert(center_array(["A","B","C","D","E","F"],5,3) == ["A","B","C","E","F"]);*/
   if(!empty($series)){
   		$post = $series;
   		
   		$series_title = get_the_title();
   		$series_blurb = get_post_field('post_content', $post->ID);
   		if($override != "Yes"){
   			$posts = get_field('series_articles');
   		} else {
   			$posts = $manual_posts;
   		}
   		
   		if($posts){
   			$number_of_posts = count($posts);
   			foreach($posts as $key => $post) {
   				
   				$series_posts[] = array(
   					"title" => get_the_title(),
   					"permalink" => get_the_permalink(),
   					"image" => get_field('1x1_square')["url"],
   					"id" => $post->ID,
   					"number" => $key + 1

   				);
   				if($post->ID == $this_article_id){
   					$article_location = $key;
   				}

   			}
   			if(isset($article_location)){
   				$series_posts = center_array($series_posts,min(6,count($series_posts)),$article_location);
   			}
   		}
   		   wp_reset_postdata();
   }
   wp_reset_postdata();
   if(count($series_posts) > 0) :


   ?>
<div class='row series-header small-8 small-centered large-10 large-uncentered '><?php echo $series_label; ?></div>
<div class='series-body full-width js-desktop-series show-for-medium-up'>
        <div class='row article-component'>
            <div class='columns medium-5 medium-offset-1 push-4 series-copy'>
                <?php
   echo "<div class='series-title'>" . $series_title . "</div>";
   echo "<div class='series-blurb'>" . $series_blurb . "</div>";
   echo "<ul class='series-menu'><div class='rule-line'></div>";
   foreach($series_posts as $key => $series_post){
   		echo "<li  data-index=\"" . $key .  "\"><a href='". $series_post['permalink'] . "'>" . $series_post['title'] . "<span class='series-number-indicator'>(" .$chapter. " " . $series_post['number'] . " of " . $number_of_posts . ")</span></a></li>";
   }
   echo "</ul>"


?>
            </div>
            <div class='columns medium-4 pull-6 series-images'>
                <?php 

			foreach ($series_posts as $key => $series_post){
				echo "<div data-index=\"" . $key .  "\" class=\"series-image\"><a href=\"". $series_post['permalink'] . "\"><img src=\"".$series_post['image']."\"></a></div>";
			}

		?>
            </div>
        </div>
</div>
<div class='series-body-mobile row show-for-small-only article-component'>

	    <div class='columns small-8 small-centered series-title'><?php echo $series_title; ?></div>
   		<div class='columns small-8 small-centered series-blurb'><?php echo $series_blurb; ?></div>
   		<div class='js-series-carousel row'>
		<?php 

		foreach ($series_posts as $key => $series_post){
			echo "<div class=\"series-carousel-item small-8 small-centered  \"><div class=\"series-image js-dots-go-under \"><a href=\"". $series_post['permalink'] . "\"><img src=\"".$series_post['image']."\"></a></div>";
			echo "<div class=\"series-copy \"><a href=\"". $series_post['permalink'] . "\">".$series_post['title']. "</a>";
			echo "<div class='series-number-indicator'>" .$chapter. " " . $series_post['number'] . " of " . $number_of_posts . "</div></div></div>";
		}

		?>   			


   		</div>

</div>
<?php endif; ?>
