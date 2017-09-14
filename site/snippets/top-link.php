<div id="top">
	<?php if($page->parent()->isInvisible() == '1'): ?>
		<a href="<?php echo $site->homePage()->url() ?>" class="top-link">Back to home</a>
	<?php else: ?>	
		<a href="<?php echo $page->parent()->url() ?>" class="top-link">Back to <?php echo $page->parent()->title() ?></a>
	<?php endif?>
</div>