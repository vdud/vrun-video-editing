<script lang="ts">
	import { currentPage } from '$lib/stores/currentPage';

	$currentPage = 'personal-projects';

	const turnoFF = () => {
		const onlyMobile = document.querySelector('.OnlyMobile') as HTMLElement;
		onlyMobile.style.display = 'none';
	};
</script>

<div class="brandguidanceBody">
	<div class="brGuContent">
		<div class="OnlyMobile">
			<h3 class="desclaimerH3">I would Highly recommend to view this on Desktop/Laptop</h3>
			<p>Because all the content is WebM except first video, So WebM is not playable on Mobiles</p>
			<button on:click={turnoFF} class="LetsGo"
				>I would Just like to read the case Study ▶️
			</button>
		</div>

		<div class="headerH2">
			<h2>Personal Fav</h2>
		</div>

		<p>
			Welcome to my case study, where I am excited to showcase three remarkable projects I have
			worked on, along with a heartfelt testimonial video from a satisfied client and friend from
			New York. This collection encapsulates the essence of my work, highlighting the dynamic world
			of boxing, the pursuit of physical transformation, and the power of client feedback. Let's
			dive into the details:
		</p>

		<h3 class="PointH3">1. Steve Rolls Boxing Fight Highlight Reel</h3>
		<p class="spanBG">
			The Steve Rolls Boxing Fight Highlight Reel captures the intensity and skill of a professional
			boxer's journey.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1686037967/vrun-video-editing/Final_Steve_Rolls_Fight_Night_we9ace.mp4"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Animated Introduction Video</p>
		</div>

		<p>
			Steve Rolls, a prominent figure in the boxing world, entrusted me with creating a captivating
			highlight reel that showcased his best moments in the ring.
		</p>

		<br />

		<p>
			The objective was to showcase Steve Rolls' talent, determination, and the exhilarating moments
			of his boxing matches. The highlight reel needed to encapsulate his boxing style, agility, and
			impactful punches to generate excitement and engage his fans.
		</p>

		<br />

		<p>
			Employing a combination of fast-paced editing, impactful visual effects, and powerful music, I
			crafted a high-energy highlight reel that brought Steve Rolls' boxing prowess to life. By
			carefully selecting and editing footage, I emphasized his victories, knockout punches, and
			moments of intense competition.
		</p>

		<br />

		<p>
			The Steve Rolls Boxing Fight Highlight Reel garnered attention and admiration from boxing
			enthusiasts, fans, and the wider audience. It showcased Steve Rolls' dedication to his craft
			and contributed to the promotion of his professional career, further solidifying his position
			in the boxing world.
		</p>

		<h3 class="PointH3">2. Gym Athlete Himanshu, Final Physique Form</h3>
		<p class="spanBG">
			Project focused on documenting the transformation journey of Himanshu, an aspiring athlete, as
			he achieved his final physique form through disciplined training and a healthy lifestyle.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846709/vrun-video-editing/GYM_Motivation_-_Himanshu_Rao_gasreu.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Animated Introduction Video</p>
		</div>

		<p>
			The objective was to capture the remarkable physical transformation of Himanshu and inspire
			others on their fitness journeys. The project aimed to highlight the dedication, hard work,
			and discipline required to achieve significant results.
		</p>

		<br />

		<p>
			Through careful filming and editing techniques, I created a visually captivating journey that
			showcased Himanshu's progress. Starting with initial training footage, I documented his
			workouts, nutritional regimen, and lifestyle changes. The project culminated in a powerful
			depiction of his final physique form.
		</p>

		<br />

		<p>
			The Gym Athlete Himanshu project received widespread admiration and served as motivation for
			individuals striving to achieve their fitness goals. The visual representation of Himanshu's
			transformation inspired others to adopt healthier lifestyles, demonstrating the power of
			perseverance and dedication.
		</p>

		<h3 class="PointH3">3. Gym Trainer Gaurav, Final Physique Form</h3>
		<p class="spanBG">
			Project showcased the incredible physical transformation of Gaurav, a dedicated gym trainer,
			as he achieved his final physique form through his expertise and commitment to training.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846664/vrun-video-editing/GYM_Motivation_-_Gaurav_nh9lpj.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Animated Introduction Video</p>
		</div>

		<p>
			The objective was to document Gaurav's journey and inspire aspiring gym-goers and fitness
			enthusiasts. The project aimed to highlight Gaurav's expertise as a trainer and his ability to
			lead by example.
		</p>

		<br />

		<p>
			By capturing Gaurav's training sessions, nutrition planning, and lifestyle adjustments, I
			created a compelling narrative that showcased his dedication to his craft. The project
			culminated in a visually stunning depiction of his final physique form, highlighting the
			effectiveness of his training methods.
		</p>

		<br />

		<p>
			The Gym Trainer Gaurav project received positive feedback from viewers, aspiring trainers, and
			fitness enthusiasts. Gaurav's transformation served as a testament to his knowledge, skill,
			and commitment to helping others achieve their fitness goals.
		</p>

		<h3 class="PointH3">4. Testimonial from Friend from New York</h3>
		<p class="spanBG">
			The testimonial video features a heartfelt endorsement from a satisfied client and friend from
			New York. The video captures their experience working with me and the impact my services had
			on their project or personal journey.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685847286/vrun-video-editing/Whee_Whee_Testimonial_Website_Dimention_r176ky.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Testimonial from WeWee</p>
		</div>

		<p>
			The objective was to showcase the positive impact of my work through the words and experiences
			of a client. The testimonial aimed to convey trust, satisfaction, and the value I bring to my
			clients' projects.
		</p>

		<br />

		<p>
			By conducting an interview-style video shoot, I captured the client's genuine emotions and
			their personal journey. Through skillful editing, I ensured the testimonial video conveyed
			their appreciation, trust, and the positive outcomes of our collaboration.
		</p>
		<br />

		<p>
			The testimonial video from my friend in New York serves as a powerful endorsement, validating
			the quality and effectiveness of my services. The client's genuine feedback provides
			prospective clients with confidence in their decision to work with me, reinforcing my
			reputation and expertise in the industry.
		</p>

		<br />

		<p>
			In summary, this case study showcases my diverse range of projects, including a boxing
			highlight reel, physique transformation journeys, and a heartfelt testimonial video. Each
			project represents my commitment to excellence, creativity, and the ability to capture and
			convey powerful narratives. Together, they demonstrate my expertise in creating engaging and
			impactful content that resonates with audiences.
		</p>
		<br />

		<h1>Thankyou,</h1>
		<h1 class="smallH1">from Varun</h1>
	</div>
</div>

<style>
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
