<?php
$hero_type = get_field('hero_type');
if($hero_type == "Image"){
	get_template_part('partials/oscars/oscars', 'hero_image');
} else if ($hero_type == "Video"){
	get_template_part('partials/oscars/oscars', 'hero_video');


} else if ($hero_type == "Cinemagraph"){
	get_template_part('partials/oscars/oscars', 'hero_cinemagraph');

}
?>