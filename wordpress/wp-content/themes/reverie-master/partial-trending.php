
<?php

$labels = array('daily'=>'Today','monthly'=>'Last 30 days','weekly'=>'Last 7 days')

?>
<div class='js-trending-container  home-component'>
 <div class="row">
    <div id='trending-title' class="title-section columns text-left small-only-text-center">
        <span>Trending</span>
    </div>
    </div>
       <div class="row full-width latest-header title-section-border">
    </div>
    <div class='row js-trending small-collapse medium-uncollapse'>
    <div class='columns medium-1 small-10 small-centered medium-uncentered medium-offset-9 trending-dropdown-column'>

    <div class='dropdown-container js-trending-dropdown'>
        <div class='js-trending-current-range dropdown-current-range' data-dropdown="trending-dropdown" aria-controls="trending-dropdown" aria-expanded="false"><?php echo $labels['daily'];?></div>
        <ul id="trending-dropdown" class="trending-dropdown" data-dropdown-content aria-hidden="true" tabindex="-1">
            <li class='dropdown-choice' id='js-daily'><?php echo $labels['daily'];?></li>
            <li class='dropdown-choice' id='js-weekly'><?php echo $labels['weekly'];?></li>
            <li class='dropdown-choice' id='js-monthly'><?php echo $labels['monthly'];?></li>
        </ul>
    </div>
    </div>
</div>
<div class='all-partial-trending-results'>
<?php 

 include(locate_template('partial-trending-results.php'));  

?>
</div>
</div>