<?php
/**
 * Plugin Name:       Cuboh Storefront Button
 * Description:       Takes customers directly to your Cuboh storefront.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Cuboh
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cuboh-storefront-button
 *
 * @package           cuboh-storefront-button
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cuboh_storefront_button_cuboh_storefront_button_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'cuboh_storefront_button_cuboh_storefront_button_block_init' );
