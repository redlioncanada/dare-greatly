<?php
	if( have_rows('projects') ):
		$projects = get_field('projects');
		$projects_announcing_title = get_field('projects_announcing_title');
		$projects_announcing_body = get_field('projects_announcing_body');
?>
		<script>
			$(function() {
				var lastIndex = -1, animTimeout = false
				$('.canada150-project-cta').click(function(event) {
					event.preventDefault()
					event.stopImmediatePropagation()
					var target = $(event.target).closest('.third'),
						index = target.attr('data-index')

					if (!!animTimeout) {
						clearTimeout(animTimeout)
						animTimeout = false
					}

					$('.third-content > div').removeClass('expanded')
					$('.third').removeClass('expanded')

					if (lastIndex !== index) {
						var shouldRemoveBorder = lastIndex < 3 && index >=3 || lastIndex >=3 && index < 3 //naive approach
						animTimeout = setTimeout(function() {
							var element = $('.third-content .content-'+index)

							if (shouldRemoveBorder) {
								$('.third-content').removeClass('expanded')
							}
							element.addClass('expanded')
							element.closest('.third-content').addClass('expanded')
							$('.canada150-projects').addClass('expanded')
						}, lastIndex == -1 ? 0 : 500)
						target.addClass('expanded')

						lastIndex = index
					} else {
						$('.canada150-projects').removeClass('expanded')
						animTimeout = setTimeout(function() {
							$('.third-content').removeClass('expanded')
						}, 500)
						lastIndex = -1
					}
				})
				return false
			})
		</script>
		<div class='canada150-projects home-component row'>
			<div class="small-10 small-centered show-for-small-only">
				<div class="third third-left" data-index="0">
					<?php
							if (array_key_exists(0, $projects)) {
								$project_number = 0;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
				</div>
				<div class="third-content">
					<div class="content-0"></div>
				</div>
				<div class="third third-right" data-index="1">
					<?php
							if (array_key_exists(1, $projects)) {
								$project_number = 1;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
				</div>
				<div class="third-content">
					<div class="content-1"></div>
				</div>
				<div class="third third-left" data-index="2">
					<?php
							if (array_key_exists(2, $projects)) {
								$project_number = 2;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
				</div>
				<div class="third-content">
					<div class="content-2"></div>
				</div>
				<div class="third third-right" data-index="3">
					<?php
							if (array_key_exists(3, $projects)) {
								$project_number = 3;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
				</div>
				<div class="third-content">
					<div class="content-3"></div>
				</div>
				<div class="third third-left" data-index="4">
					<?php
							if (array_key_exists(4, $projects)) {
								$project_number = 4;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
				</div>
				<div class="third-content">
					<div class="content-4"></div>
				</div>
			</div>
			<div class="small-10 small-centered columns show-for-medium">
				<div class="third-wrapper first-wrapper">
					<div class="third" data-index="0">
						<?php
							if (array_key_exists(0, $projects)) {
								$project_number = 0;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
					</div>
					<div class="third" data-index="1">
						<?php
							if (array_key_exists(1, $projects)) {
								$project_number = 1;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
					</div>
					<div class="third" data-index="2">
						<?php
							if (array_key_exists(2, $projects)) {
								$project_number = 2;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
					</div>
				</div>
				<div class="third-content">
					<div class="content-0">
					</div>
					<div class="content-1">
					</div>
					<div class="content-2">
					</div>
				</div>
				<div class="third-wrapper">
					<div class="third" data-index="3">
						<?php
							if (array_key_exists(3, $projects)) {
								$project_number = 3;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
					</div>
					<div class="third" data-index="4">
						<?php
							if (array_key_exists(4, $projects)) {
								$project_number = 4;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							}
						?>
					</div>
				</div>
				<div class="third-content">
					<div class="content-3">
					</div>
					<div class="content-4">
					</div>
				</div>
			</div>
			<div class="canada150-announcing small-12 medium-4 left columns">
				<h4 class="canada150-announcing-title">
					<?php echo $projects_announcing_title; ?>
				</h4>
				<p class="canada150-announcing-body">
					<?php echo $projects_announcing_body; ?>
				</p>
			</div>
		</div>
<?php endif; ?>