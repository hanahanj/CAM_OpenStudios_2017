<?php snippet('header') ?>
<?php snippet('top-link') ?>

<body style="background: <?php echo $page-> color() ?>">

<div class="container project">

	<div class="document-side metadata">
		<?php echo $page->metadata()->html() ?>
	</div>

	<div class="document">
		<h1><?php echo $page->title()->html() ?></h1>
		<?php echo $page->text()->kirbytext() ?>
	</div>

</div>

<?php snippet('meta-bar') ?>
<?php snippet('footer') ?>