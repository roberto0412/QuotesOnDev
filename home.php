<?php
/**
 * The main template file.
 *
 * @package QOD_Starter_Theme
 */
get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>
		<?php
		
		
		$args = array(
        'posts_per_page'    =>  1
    );

    $my_post = new WP_Query( $args );
		
		
		?>
			<?php /* Start the Loop */ ?>
			<?php while ( $my_post->have_posts() ) : $my_post->the_post(); ?>
				
				<?php get_template_part( 'template-parts/content' ); ?>

			<?php endwhile; ?>
		<button type="button" id="nextquote">Show Me Another!</button>

		<?php else : ?>

			<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>