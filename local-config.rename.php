

<?php
# rename to local-config.php 
# These configs will work with Docker default installation.
define('WP_DEBUG', true);
define( 'SAVEQUERIES', true );
//LOCAL
define('DB_NAME', 'dg'); 
define('DB_USER', 'wordpressuser'); 
define('DB_PASSWORD', 'orangutan');
define('DB_HOST', 'db');

error_reporting(E_ALL);
@ini_set('log_errors', 1);
@ini_set('display_errors', 1);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
define('DOMAIN_CURRENT_SITE', '0.0.0.0'); 