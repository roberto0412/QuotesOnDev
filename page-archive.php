<?php
/**
 * Custom archives page
 *
 * @package quotes
 */
get_header(); ?>

  <h2>
    <?= the_title(); ?>
  </h2>

  <?php
    $posts = get_posts(array(
      'posts_per_page' => '-1'
    ));
    if ($posts) : ?>
      <div class="section_container">
        <h1>Quote Authors</h1>

        <ul class="link_list">
        <?php foreach ($posts as $post) : setup_postdata($post); ?>

          <li>
            <a href="<?= esc_url(get_permalink()); ?>">
              <?= the_title(); ?>
            </a>
          </li>

        <?php endforeach; wp_reset_postdata(); ?>
      </ul>
    </div>
  <?php endif; ?>
  <?php if (wp_count_posts()) : ?>
    <div class="cat_container " > 
      <h1>Categories</h1>

      <ul class="category_list">
        <?php 
          wp_list_categories(array(
            'title_li' => '',
          ));
        ?>
      </ul>
    </div>
  <?php endif; ?>
  <?php $tags = get_tags(); if ($tags) : ?>
    <div class="tag_container">
      <h1>Tags</h1>

      <ul class="tag_lists">
        <?php foreach ($tags as $tag) : ?>

          <li>
            <a href="<?= esc_url(get_tag_link($tag->term_id)); ?>">
              <?= $tag->name; ?>
            </a>
          </li>

        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>

<?php get_footer(); ?>