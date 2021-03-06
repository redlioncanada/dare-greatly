<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress 
Conditional based on which server you are on.
*/

if($_SERVER['HTTP_HOST'] === 'http://devserver.com' ) {
	define('DB_NAME', '');
} else if($_SERVER['HTTP_HOST'] === 'http://stageserver.com') {
	define('DB_NAME', '');
} else {
	define('DB_NAME', '');
}

define( 'WP_ALLOW_MULTISITE', true );
/** MySQL database username */



define('DEV_DOMAIN','');
define('STAGE_DOMAIN','');
define('CURRENT_DOMAIN',$_SERVER['HTTP_HOST']);
$curdir = dirname(__FILE__);


// Local overrides
$local_config_path = "{$curdir}/local-config.php";
if (file_exists($local_config_path)) {
    require_once($local_config_path);
}
#define('DB_USER', 'admin');
defined('DB_USER') or define('DB_USER', 'username_here');
/** MySQL database password */
defined('DB_PASSWORD') or define('DB_PASSWORD', 'password_here' );
#define('DB_PASSWORD', 'orangutan');

/** MySQL hostname */
defined('DB_HOST') or define('DB_HOST', 'localhost');
#define('DB_HOST', 'db:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
defined('WP_DEBUG') or define('WP_DEBUG', false);

define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
defined('DOMAIN_CURRENT_SITE') or define('DOMAIN_CURRENT_SITE', $_SERVER['HTTP_HOST']);



#define('DOMAIN_CURRENT_SITE', '192.168.99.100');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');



