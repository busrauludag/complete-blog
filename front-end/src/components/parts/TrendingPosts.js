import react from 'react';

const TrendingPosts = () => {
  return(
    <section class="top-home-section">
			<div class="container">
				<div class="title-section text-center">
					<h1>Trending Posts</h1>
				</div>
				<div class="top-home-box">
					<div class="row">
						<div class="col-lg-6 col-md-12">
							<div class="news-post image-post">
								<img src="upload/blog/home5/a1.jpg" alt="" />
								<div class="hover-post">
									<a class="category-link" href="#">Lifestyle</a>
									<h2><a href="single-post.html">Praesent placerat quiseros.</a></h2>
									<ul class="post-tags">
										<li>3 days ago</li>
										<li><a href="#">2 comments</a></li>
									</ul>
								</div>
							</div>
						</div>

						<div class="col-lg-6 col-md-12">
							<div class="row">
								<div class="col-md-6">
									<div class="news-post standard-post left-align">
										<div class="image-holder">
											<a href="single-post.html"><img src="upload/blog/home2/m2.jpg" alt="" /></a>
										</div>
										<a class="text-link" href="#">Travel</a>
										<h2><a href="single-post.html">Vestibulum auctor dapibus.</a></h2>
										<ul class="post-tags">
											<li>by <a href="#">Stan Enemy</a></li>
											<li>3 days ago</li>
										</ul>
									</div>
								</div>
								<div class="col-md-6">
									<div class="news-post standard-post left-align">
										<div class="image-holder">
											<a href="single-post.html"><img src="upload/blog/home2/m3.jpg" alt="" /></a>
										</div>
										<a class="text-link" href="#">Travel</a>
										<h2><a href="single-post.html">Praesent placerat risus.</a></h2>
										<ul class="post-tags">
											<li>by <a href="#">Stan Enemy</a></li>
											<li>3 days ago</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="news-post standard-post left-align">
										<div class="image-holder">
											<a href="single-post.html"><img src="upload/blog/home2/m6.jpg" alt="" /></a>
										</div>
										<a class="text-link" href="#">Food</a>
										<h2><a href="single-post.html">Aliquam tincidunt mauriseu</a></h2>
										<ul class="post-tags">
											<li>by <a href="#">Stan Enemy</a></li>
											<li>2 weeks ago</li>
										</ul>
									</div>
								</div>
								<div class="col-md-6">
									<div class="news-post standard-post left-align">
										<div class="image-holder">
											<a href="single-post.html"><img src="upload/blog/home2/m7.jpg" alt="" /></a>
										</div>
										<a class="text-link" href="#">Lifestyle</a>
										<h2><a href="single-post.html">Praesent placerat risus.</a></h2>
										<ul class="post-tags">
											<li>by <a href="#">Stan Enemy</a></li>
											<li>2 weeks ago</li>
										</ul>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
  );
};

export default TrendingPosts;