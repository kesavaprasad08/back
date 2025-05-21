WordPress Theme Setup Guide
This guide provides step-by-step instructions for setting up WordPress, installing the "Beats by Sonaar" theme, configuring user roles, and integrating marketplace and feed functionalities.

1. Initial WordPress Setup
Clone the Repository:

Bash

git clone [your-repository-url]
Replace [your-repository-url] with the actual URL of your repository.

Download WordPress:
Get the latest version of WordPress from the official WordPress website.

Database Setup:
Create a new database for your WordPress installation. You can usually do this through your web hosting control panel (e.g., cPanel, phpMyAdmin). Make sure to note down the database name, username, and password.

Replace wp-content Folder:
After extracting the downloaded WordPress files, navigate to the WordPress installation directory. Replace the default wp-content folder with the wp-content folder from your cloned repository. This folder typically contains the theme, plugins, and uploads necessary for your setup.

2. Beats by Sonaar Theme Configuration
Activate Theme:

In your WordPress admin dashboard, go to Appearance > Themes.
Find the Sonaar theme and click Activate.
Install Required Plugins:

Upon theme activation, you'll likely see a notice prompting you to install recommended plugins. Click on "Begin installing plugins" and proceed to install all listed plugins.
Activate Sonaar License:

Follow any on-screen prompts for the Sonaar theme setup.
Activate your license key when requested.
Install Iron Demo Importer:

Go to Plugins > Installed Plugins.
Locate Iron Demo Importer and click Activate.
Refresh Page:

Refresh your WordPress admin page after activating the plugin.
Import Demo Content:

Navigate to Tools > Demo Content Install.
Select Beats for Elementor and click Install to import the theme's demo data.
3. User Roles, Registration & Login (Ultimate Member)
Activate Ultimate Member:

Go to Plugins > Installed Plugins.
Find Ultimate Member and click Activate.
Create Essential Pages:

After activation, a popup will appear: "Ultimate Member needs to create several pages." Click Create Pages, then Save Changes.
Define User Roles:

Navigate to Ultimate Member > User Roles.
Click Add New.
Enter the title Artist and click **Create Role`.
Repeat this process to create the following additional roles: Producer, DJ, and Listener.
Add Roles to Registration Form:

Go to Ultimate Member > Forms > Default Registration.
Click Add Field.
Select Roles (Dropdown) from the available field types.
Click Update to save the changes to your registration form.
4. Marketplace Setup (WooCommerce & WCFM)
Activate WooCommerce:

Go to **Plugins > Installed Plugins`.
Find WooCommerce and click Activate.
Activate WCFM - WooCommerce Frontend Manager:

Go to **Plugins > Installed Plugins`.
Find WCFM - WooCommerce Frontend Manager and click Activate.
Complete Setup Wizards:

Follow the initial setup wizards for both WooCommerce and WCFM. Click Continue on all steps to complete their basic configurations.
Configure Payments:

Navigate to **WooCommerce > Settings > Payments`.
Add and configure your preferred payment gateway(s) (e.g., PayPal, Stripe, bank transfer).
5. Feed Setup (BuddyPress & RTMedia)
Activate Required Plugins:
Go to **Plugins > Installed Plugins`.
Activate the following plugins:
BuddyPress
BP Profile Search
rtMedia for WordPress, BuddyPress and bbPress
6. Custom CSS Adjustments (Optional)
If you need to fine-tune text colors for better visibility or to align with your brand, you can add custom CSS.

Navigate to Customizer:

In your WordPress admin, go to Appearance > Themes > Sonaar Child > Customize.
Add Additional CSS:

Click on Additional CSS.
Paste the following CSS code into the text area:
CSS

/* Sets various text elements to black. Use this if your site has a light background. */
body, .video-post, .sr_it-single-post h2, .concerts-list .title-row .sr_it-datetime, .event-row .sr_it-datetime, .tab-title, .tab-title .excerpt, .tracks-list .name, .comment-reply-title, h2.widgettitle, #sidebar .panel__heading, #sidebar .panel__heading h3, .media-block .sr_it-datetime, .media-block .meta-simple, .media-block .category, .form input[type="submit"], .concerts-list .title-row .time, .concerts-list .expanded .title-row .button, .post_grid .tab-text time.sr_it-datetime, h1, h3.widgettitle, .excerpt p, .tweet_text, .available-now, .release-date, .container .nm_mc_form input[type="text"], .container .nm_mc_form label, .container .nm_mc_error, #sidebar .nm_mc_error, .event-row .button, .media-block h2, .tracks-list > li:before, .tab-date, .videogrid .text-box h2, .control-description, .wpb_content_element, .lighter-overlay h1, .lighter-overlay h2, .lighter-overlay h3, .lighter-overlay h4, .lighter-overlay h5, .lighter-overlay h6, #sidebar .textwidget, ul, li, dl, dt, dd, ol, pre, tr, td, th, .wooprice del, .woocommerce .woocommerce-message, .woocommerce .woocommerce-error, .woocommerce .woocommerce-info, .woocommerce-page .woocommerce-message, .woocommerce-page .woocommerce-error, .woocommerce-page .woocommerce-info, .description_tab, .reviews_tab, h3, .panel-action:hover, .sr_it-videolist-container .sr_it-videolist-item-title, .sr_it-videolist-item-artist, .sr_it-videolist-item-date {
   color: black;
}

/* Sets various text elements to white. Use this if your site has a dark background. */
/* You should choose either 'black' or 'white' as the primary color based on your theme's default background. */
/* For instance, if your site is dark, keep this block and remove the previous one. */
/*
body, .video-post, .sr_it-single-post h2, .concerts-list .title-row .sr_it-datetime, .event-row .sr_it-datetime, .tab-title, .tab-title .excerpt, .tracks-list .name, .comment-reply-title, h2.widgettitle, #sidebar .panel__heading, #sidebar .panel__heading h3, .media-block .sr_it-datetime, .media-block .meta-simple, .media-block .category, .form input[type="submit"], .concerts-list .title-row .time, .concerts-list .expanded .title-row .button, .post_grid .tab-text time.sr_it-datetime, h1, h3.widgettitle, .excerpt p, .tweet_text, .available-now, .release-date, .container .nm_mc_form input[type="text"], .container .nm_mc_form label, .container .nm_mc_error, #sidebar .nm_mc_error, .event-row .button, .media-block h2, .tracks-list > li:before, .tab-date, .videogrid .text-box h2, .control-description, .wpb_content_element, .lighter-overlay h1, .lighter-overlay h2, .lighter-overlay h3, .lighter-overlay h4, .lighter-overlay h5, .lighter-overlay h6, #sidebar .textwidget, ul, li, dl, dt, dd, ol, pre, tr, td, th, .wooprice del, .woocommerce .woocommerce-message, .woocommerce .woocommerce-error, .woocommerce .woocommerce-info, .woocommerce-page .woocommerce-message, .woocommerce-page .woocommerce-error, .woocommerce-page .woocommerce-info, .description_tab, .reviews_tab, h3, .panel-action:hover, .sr_it-videolist-container .sr_it-videolist-item-title, .sr_it-videolist-item-artist, .sr_it-videolist-item-date {
    color: white;
}
*/

/* Specific elements forced to black for clarity, useful for elements on a light background within a dark theme. */
.description, .wcfm_title, .wcfm_ele, .virtual_ele_title, .checkbox_title, .simple, .variable, .booking, .non-pw-gift-card {
	color: black !important;
}

/* Specific elements forced to white for clarity, useful for elements on a dark background within a light theme. */
.page_collapsible, .products_manage_general, .simple, .variable, .external, .grouped, .booking {
	color :white !important; /* Added !important for stronger override */
}


