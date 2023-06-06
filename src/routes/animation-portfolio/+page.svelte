<script lang="ts">
	import { currentPage } from '$lib/stores/currentPage';

	$currentPage = 'animation-portfolio';

	const turnoFF = () => {
		const onlyMobile = document.querySelector('.OnlyMobile') as HTMLElement;
		onlyMobile.style.display = 'none';
	};
</script>

<div class="brandguidanceBody">
	<div class="brGuContent">
		<div class="OnlyMobile">
			<h3 class="desclaimerH3">I would Highly recommend to view this on Desktop/Laptop</h3>
			<p>Because some of the content is in WebM & it is not playable on Mobiles</p>
			<button on:click={turnoFF} class="LetsGo">
				I would Just like to read the case Study ▶️
			</button>
		</div>

		<div class="headerH2">
			<h2>Animation</h2>
		</div>

		<p>
			Welcome to my portfolio, where I am thrilled to showcase some of the engaging animations I
			have created for various clients. In this collection, you will find two standout projects: an
			animated intro for Millennial Girls Media's YouTube podcast channel and captivating lower
			third animations for Nissan Canada's newly established offices. Let's delve into the details:
		</p>

		<h3 class="PointH3">1. Millennial Girls Media</h3>
		<p class="spanBG">
			YouTube channel hosted by an influencer who explores modern ways of earning money and the
			millennial job landscape
		</p>
		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1686032913/vrun-video-editing/Millennial_girls_Intro_Opener_Animated_ezfytj.mp4"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Animated Introduction Video</p>
		</div>

		<p>
			As part of this project, I had the exciting opportunity to create an animated intro that
			captures the essence of the channel's content.
		</p>
		<br />
		<p>
			The goal was to design an intro that reflected the modern and entrepreneurial spirit of
			Millennial Girls Media. It needed to convey the topics covered, such as earning money in
			unique ways, interviewing freelancers, and discussing remote job opportunities in places like
			Bali.
		</p>
		<br />
		<p>
			The animated intro has successfully enhanced the branding and visual appeal of Millennial
			Girls Media's YouTube podcast channel. Its engaging and modern design sets the stage for the
			informative and captivating content that awaits viewers.
		</p>

		<h3 class="PointH3">2. Nissan Canada (AirPort)</h3>
		<p class="spanBG">
			Nissan Canada, an esteemed automotive company, sought to introduce its newly established
			offices in Canada.
		</p>
		<p>
			As part of their promotional campaign, I created captivating lower third animations to
			highlight the key individuals within the organization.
		</p>
		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685847121/vrun-video-editing/Nissan/Drifting/Mark_nea8ck.mp4"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Animated Introduction Video</p>
		</div>

		<p>
			The objective was to create a visually appealing and informative introduction for the workers,
			managers, and salespersons of Nissan Canada. The animations were meant to emphasize the
			expertise, professionalism, and approachability of the individuals featured, while aligning
			with Nissan's brand identity.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846895/vrun-video-editing/Nissan/Rico_Simple_fkfjrm.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Introduction to the Nissan Salesforce</p>
		</div>

		<p>
			I employed a combination of sleek design elements, subtle motion graphics, and smooth
			transitions to create the lower third animations. By incorporating Nissan's brand colors and
			utilizing modern typography, the animations exuded a sense of professionalism and cohesion.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846869/vrun-video-editing/Nissan/3Guy_Airport_qos3bx.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Introduction to the Nissan Airport Salesforce</p>
		</div>

		<p>
			The introduction animations successfully showcased the key personnel at Nissan Canada, giving
			viewers a glimpse into the expertise and dedication of the individuals behind the scenes. The
			animations contributed to a positive perception of the company, reinforcing its commitment to
			excellence and customer satisfaction.
		</p>

		<p>
			In conclusion, the animations created for Millennial Girls Media and Nissan Canada demonstrate
			my ability to bring visual storytelling to life. By combining creativity, technical expertise,
			and a deep understanding of each client's objectives, I have successfully delivered animations
			that elevate the overall brand presence and engage audiences effectively.
		</p>

		<h1>Thankyou,</h1>
		<h1 class="smallH1">from Varun</h1>
	</div>
</div>

<style>
	.PointH3 {
		font-size: 1rem;
		margin-top: 10px;
	}
	.smallH1 {
		font-size: 1rem;
		font-family: 'Monument';
	}
	.BGvideoMain {
		width: 100%;
	}
	.BGvideo {
		width: 100%;
		margin: 10px 0;
	}
	.spanBG {
		color: #3339;
		font-size: 0.9rem;
	}
	.headerH2 {
		text-align: center;
	}
	.brandguidanceBody {
		width: 100%;
	}
</style>
