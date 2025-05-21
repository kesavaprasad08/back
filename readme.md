
# Music Marketplace Setup Guide

This guide explains how to set up the Music Marketplace using the Beats by Sonaar theme, configure user roles, marketplace, feeds, and add custom CSS.

---

## 1. Initial WordPress Setup

### Clone the Repository

```bash
git clone [your-repository-url]
```

Replace `[your-repository-url]` with your repo URL.

### Download WordPress

Download WordPress from [wordpress.org](https://wordpress.org/download/).

### Create Database

Create a new database and note the credentials for your `wp-config.php`.

### Replace `wp-content`

Replace the `wp-content` folder in WordPress with the one from your cloned repo.

---

## 2. Beats by Sonaar Theme Setup

- Go to **Appearance > Themes**
- Activate the **Sonaar** theme.
- Install and activate required plugins when prompted.
- Activate your Sonaar license.
- Install **Iron Demo Importer** plugin and activate it.
- Import the **Beats for Elementor** demo via **Tools > Demo Content Install**.

---

## 3. User Roles Setup (Ultimate Member)

- Activate **Ultimate Member** plugin.
- Create default pages via the plugin prompt.
- Add user roles: Artist, Producer, DJ, Listener at **Ultimate Member > User Roles**.
- Add a "Roles" dropdown field to registration form under **Ultimate Member > Forms**.

---

## 4. Marketplace Setup (WooCommerce & WCFM)

- Activate **WooCommerce** plugin and follow setup wizard.
- Activate **WCFM – WooCommerce Frontend Manager** plugin.
- Complete setup wizards and configure payment gateways under **WooCommerce > Settings > Payments**.

---

## 5. Feed Setup (BuddyPress & rtMedia)

- Activate these plugins:
  - BuddyPress
  - BP Profile Search
  - rtMedia for WordPress, BuddyPress and bbPress

---

## 6. Custom CSS for Text Colors

Add the following CSS in **Appearance > Customize > Additional CSS**:

```css
body, .video-post, .sr_it-single-post h2, .concerts-list .title-row .sr_it-datetime,
.event-row .sr_it-datetime, .tab-title, .tab-title .excerpt, .tracks-list .name,
.comment-reply-title, h2.widgettitle, #sidebar .panel__heading,
#sidebar .panel__heading h3, .media-block .sr_it-datetime,
.media-block .meta-simple, .media-block .category, .form input[type="submit"],
.concerts-list .title-row .time, .concerts-list .expanded .title-row .button,
.post_grid .tab-text time.sr_it-datetime, h1, h3.widgettitle, .excerpt p,
.tweet_text, .available-now, .release-date, .container .nm_mc_form input[type="text"],
.container .nm_mc_form label, .container .nm_mc_error, #sidebar .nm_mc_error,
.event-row .button, .media-block h2, .tracks-list > li:before, .tab-date,
.videogrid .text-box h2, .control-description, .wpb_content_element,
.lighter-overlay h1, .lighter-overlay h2, .lighter-overlay h3,
.lighter-overlay h4, .lighter-overlay h5, .lighter-overlay h6,
#sidebar .textwidget, ul, li, dl, dt, dd, ol, pre, tr, td, th, .wooprice del,
.woocommerce .woocommerce-message, .woocommerce .woocommerce-error, .woocommerce .woocommerce-info,
.woocommerce-page .woocommerce-message, .woocommerce-page .woocommerce-error,
.woocommerce-page .woocommerce-info, .description_tab, .reviews_tab, h3,
.panel-action:hover, .sr_it-videolist-container .sr_it-videolist-item-title,
.sr_it-videolist-item-artist, .sr_it-videolist-item-date {
  color: black;
}

.description, .wcfm_title, .wcfm_ele, .virtual_ele_title,
.checkbox_title, .simple, .variable, .booking, .non-pw-gift-card {
  color: black !important;
}

.page_collapsible, .products_manage_general, .simple, .variable,
.external, .grouped, .booking {
  color: white !important;
}
```
