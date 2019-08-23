<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			
				<h1>Submit a Quote</h1>
				<?php if (is_user_logged_in()) : ?>
				<form id="form_submit" >
    <label for="author">Author Of A Quote</label>
    <input type="text" id="q_author" name="author">

    <label for="content">Quote</label>
    <input type="text" id="quote" name="content">

   
   

    <label for="source"> Where did you find this quote? (e.g book name)
				<input type="text" name="source" id="source_quote"> </label>

	
	<label for="url">
				Provide the URL of the quote source, if available
				<input type="url" name="url" id="url_quote">
			</label>

    <input type="submit" value="Submit">
  </form>
</div>

<?php else : ?>

<p>Sorry, you must be logged in to submit a quote!</p>
<a href="<?= esc_url(admin_url()); ?>">Click here to login.</a>

<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
