<?php
	if( have_rows('projects') ):
		$projects = get_field('projects');
		$projects_announcing_title = get_field('projects_announcing_title');
		$projects_announcing_body = get_field('projects_announcing_body');
?>
		<div class='canada150-projects home-component row'>
			<div class="small-10 small-centered columns">
				<div class="projects-left small-7 columns">
					<?php
						if (array_key_exists(0, $projects)) {
							$project_number = 0;
							$project = $projects[$project_number];
							include(locate_template('partial-canada150-project.php'));
						}
					?>
					<?php if (array_key_exists(2, $projects)): ?>
						<div class="projects-inner-left small-5 columns">
							<?php
								$project_number = 2;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							?>
						</div>
					<?php endif; ?>
					<?php if (array_key_exists(3, $projects)): ?>
						<div class="projects-inner-right small-5 columns">
							<?php
								$project_number = 3;
								$project = $projects[$project_number];
								include(locate_template('partial-canada150-project.php'));
							?>
						</div>
					<?php endif; ?>
				</div>
				<div class="projects-right small-3 columns">
					<?php
						if (array_key_exists(1, $projects)) {
							$project_number = 1;
							$project = $projects[$project_number];
							include(locate_template('partial-canada150-project.php'));
						}
						if (array_key_exists(4, $projects)) {
							$project_number = 4;
							$project = $projects[$project_number];
							include(locate_template('partial-canada150-project.php'));
						}
					?>
				</div>
			</div>
			<div class="canada150-announcing small-4 left columns">
				<h4 class="canada150-announcing-title">
					<?php echo $projects_announcing_title; ?>
				</h4>
				<p class="canada150-announcing-body">
					<?php echo $projects_announcing_body; ?>
				</p>
			</div>
		</div>
<?php endif; ?>