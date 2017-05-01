###Creating your Network###
Reference: http://codex.wordpress.org/Create_A_Network

 **Allow Multisite**
To enable the Network Setup menu item, you must first define multisite in the wp-config.php file.

Open up **wp-config.php** and add this line above where it says /* That's all, stop editing! Happy blogging. */. If it doesn't say that anywhere, then add the line somewhere above the first line that begins with require or include:

    /* Multisite */
    define( 'WP_ALLOW_MULTISITE', true );

Once you allow the multisite, you can begin to install a network

 **Installing a Network**
The previous step enables the Network Setup item in your **Tools** menu. Use that menu item to go to the Create a Network of WordPress Sites screen.
 
To see an example of the Create a Network of WordPress Sites screen, look at **Administration > Tools > Network Setup**. The screen does not look exactly the same in all circumstances. The example shown is for an installation on localhost, which restricts the options available.
Addresses of Sites in your Network

You are given the choice between sub-domains and sub-directories, except when existing settings restrict your choice.

You must choose one or the other. You can reconfigure your network to use the other choice after installation, despite the advice on the screen, but reconfiguring it might not be easy.

You only need wildcard DNS for on-demand domain-based sites, despite the advice that may be on the screen.

Once more: See Before You Create A Network.

Sub-domains — a domain-based network in which on-demand sites use subdomains
Sub-directories — a path-based network in which on-demand sites use paths
Network Details

These are filled in automatically, but you can make changes.

Server Address
The domain of the URL you are using to access your WordPress installation.
Network Title
The title of your network as a whole.
Admin E-mail Address
Your email address as super admin of the network as a whole.
Double-check the details and press the Install button.

Note: The installer may perform a check for wildcard subdomains when you have not configured them yet, or when you do not need them at all. Ignore the warning if it does not apply to your network. See the Server Requirements section in Before You Create A Network for information about wildcard subdomains.

After this point you will need to edit your wp-config.php and .htaccess to Enable the Network.

**Enable the Network**
To enable your network, follow the instructions on the Create a Network of WordPress Sites screen. The instructions that you see are customized for your installation. They might not be the same as the examples you see here.

Back up your existing wp-config.php and .htaccess files, unless this is a fresh install and you have nothing to lose.

There are two steps:

1. Add the specified lines to your wp-config.php file
The extra lines go just after where you added the line in Step 1: Prepare Your WordPress.
2. Add the specified lines to your .htaccess file
If you do not have a .htaccess file, then create it in the same directory as your wp-config.php file.
If you ALREADY have a .htaccess file, replace any existing WP lines with these new ones.
In some cases you might also have to add Options FollowSymlinks at the start of the file.
After completing these steps, log in again using the link provided. You might have to clear your browser's cache and cookies in order to log in.

**How to Administrate**
At the left of your WordPress toolbar, My Sites is now the second item. There, all your sites are listed, with handy fly-out menus, as well as a Network Admin menu item. Under Network Admin you can use the Dashboard item to go to the Network Dashboard screen.

Go to the Settings Screen to configure network options, and the Sites Screen to manage your sites.

For more information, see: Network Admin
