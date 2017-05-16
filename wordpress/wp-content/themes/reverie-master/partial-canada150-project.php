<div class="canada150-project canada150-project-<?php echo ++$project_number; ?>">
	<img src="<?php echo $project['project_image']['url']; ?>">
	<div class="canada150-project-text-container">
		<p class="canada150-project-text">
			<span style="text-transform: uppercase;"><?php echo $project['project_name']; ?></span>.
			<?php echo $project['project_description']; ?>
		</p>
		<a class="canada150-project-cta" href="<?php echo $project['project_link'] ?>">
			<div class="indicator"><span class="plus">+</span><span class="minus">&ndash;</span></div>
			<span class="link"><?php echo $project['project_link_text']; ?></span>
		</a>
	</div>
</div>