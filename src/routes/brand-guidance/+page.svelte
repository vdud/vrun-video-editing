<script lang="ts">
	import { currentPage } from '$lib/stores/currentPage';

	$currentPage = 'brand-guidance';

	const turnoFF = () => {
		// document.querySelector('.OnlyMobile').style.display = 'none';
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
			<h2>Brand Guidance</h2>
		</div>

		<p>
			Brand guidance plays a vital role in shaping the identity, perception, and success of a
			business. As a brand guide, your role is to provide expert advice and support to clients as
			they navigate the intricate world of branding. This case study presents an all-round brand
			guidance project where you worked closely with a client from start to finish, helping them
			establish a strong and impactful brand presence.
		</p>
		<br />
		<h3 class="desclaimerH3">1. Lady Strong Fitness</h3>
		<p class="spanBG">Fitness center in Schaumburg, Illinois</p>
		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1686033477/vrun-video-editing/LSF%20Marciea/Intro_Final_bh0nff.mov"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Introduction of their Podcast Show (LSF)</p>
		</div>
		<p>
			Lady Strong Fitness is a premier gym exclusively designed for women, located in Schaumburg,
			USA. It prides itself on providing a safe and empowering space for women to achieve their
			fitness goals, foster a supportive community, and prioritize their overall well-being. As a
			brand guide for Lady Strong Fitness, you have been involved in various aspects of their brand
			development and enhancement.
		</p>

		<div class="BGImage">
			<img
				class="BGImageMain"
				src="https://res.cloudinary.com/dxc5p65tt/image/upload/v1685846802/vrun-video-editing/LSF%20Marciea/Podcast-screenshot-1_jrhfje.webp"
				alt="Podcast Marciea Allen ScreenShot LSF"
			/>
			<p class="spanBG">ScreenShot of one of the Weekly Podcasts That I edit for Marciea Allen</p>
		</div>

		<p>
			Lady Strong Fitness offers a range of specialized fitness programs and services tailored to
			meet the unique needs and preferences of women. These programs encompass various exercise
			disciplines, including strength training, cardio, yoga, and group fitness classes. The gym
			also provides personalized training sessions, nutritional guidance, and wellness workshops to
			ensure a holistic approach to health and fitness. In addition to their exceptional fitness
			offerings, Lady Strong Fitness hosts a captivating podcast show. As the brand guide, you have
			been responsible for editing and enhancing the podcast episodes to create a compelling and
			engaging listening experience. The podcast show serves as an additional platform for the gym
			to share knowledge, empower women, and foster a sense of community among its members.
		</p>

		<div class="BGImage">
			<img
				class="BGImageMain"
				src="https://res.cloudinary.com/dxc5p65tt/image/upload/v1685846800/vrun-video-editing/LSF%20Marciea/Podcast-screenshot-2_knvvpl.webp"
				alt="Podcast Marciea Allen Another ScreenShot LSF"
			/>
			<p class="spanBG">Another ScreenShot of the Weekly Podcast</p>
		</div>

		<p>
			Furthermore, Lady Strong Fitness organizes an annual awards show that recognizes and
			celebrates the achievements of its members. This special event is a testament to the gym's
			commitment to acknowledging and appreciating the dedication and progress of its community. As
			part of your role, you have contributed to the planning and execution of this awards show,
			ensuring a memorable and inspiring experience for all attendees.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846915/vrun-video-editing/LSF%20Marciea/social_media_butterfly_mnydph.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">One of the clip of the nominees from the Orenda Awards Show</p>
			<p class="spanBG"><span>SocialMedia Butterfly</span></p>
		</div>
		<p>
			By consistently delivering high-quality podcast edits, creating memorable experiences at the
			awards show, and enhancing their overall brand image, you have played a pivotal role in
			elevating the brand presence of Lady Strong Fitness and strengthening its connection with its
			target audience.
		</p>
		<br />
		<p>
			Overall, Lady Strong Fitness is a dedicated gym that offers women a supportive and empowering
			environment to pursue their fitness journey. As the brand guide, your involvement in their
			podcast show and awards show has contributed to creating a cohesive and impactful brand
			experience that resonates with their members and sets them apart in the fitness industry.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685848258/vrun-video-editing/LSF%20Marciea/LSF-Testimonial_a3mr5t.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Testimonials from the Co-Founders of LadyStrong Fitness</p>
		</div>

		<h3>2. Villains Strength & Conditioning</h3>
		<p class="spanBG">Gym in Regina, Canada</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846834/vrun-video-editing/Insta%20Posts/Short_Instagram_Video_5_MEN_d7skqd.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Advertisement for Social Media by Villains</p>
		</div>

		<p>
			Villains Gym is a leading fitness and health facility based in Canada, known for its
			dedication to raw fitness and providing a transformative experience for its members. As a
			brand guide for Villains Gym, I have been instrumental in curating and enhancing various
			elements of their brand presence, particularly in the realm of digital marketing and content
			creation.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846749/vrun-video-editing/Insta%20Posts/Short_Instagram_Video_8_Julie_Story_Dimentions_vkygrh.webm"
				controls
				autoplay
				muted
				loop
				style="width: 40%;"
			/>
			<p class="spanBG">Ad. for Youtube Short/Reel/TikTok</p>
		</div>
		<p>
			Villains Gym sets itself apart by offering a holistic approach to fitness, incorporating
			rigorous workouts, spa services, and wellness amenities to create a comprehensive fitness
			experience. As a brand guide, I have been focused on leveraging digital platforms to showcase
			the unique offerings and success stories of Villains Gym's members.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685847424/vrun-video-editing/Villians%20Testimonials/Jaimie_Interview_Update_2_f7hiwr.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Testimonials from their Members</p>
		</div>

		<p>
			Testimonials from satisfied members are one of the most powerful marketing tools for any
			fitness establishment, and I have played a crucial role in editing and presenting these
			testimonials in a compelling way.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685847404/vrun-video-editing/Villians%20Testimonials/ADAM_FINAL_Interview_nkmidx.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Another Testimonial from their Members</p>
		</div>
		<p>
			By capturing the authentic stories and transformations of Villains Gym's members, I have
			created impactful and relatable content that resonates with both existing and potential
			members.
		</p>

		<br />

		<p>
			In addition to testimonials, I have also worked on creating dynamic and engaging content for
			Villains Gym's social media platforms. This includes crafting Insta Reels, YouTube Shorts, and
			TikTok videos that showcase the gym's challenging workouts, energetic atmosphere, and the
			dedication of its members.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685846798/vrun-video-editing/Insta%20Posts/Short_Instagram_Video_9_MEN_evhfbe.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Engaging clips for Social Media Platforms</p>
		</div>

		<p>
			Through my creative editing and storytelling techniques, I have successfully captured the
			essence of Villains Gym and its vibrant community.
		</p>

		<br />

		<p>
			Moreover, my brand guidance extends to developing promotional content for Villains Gym's
			fitness mobile app. As the popularity of mobile apps continues to rise, I recognized the
			importance of creating a captivating and informative promotional campaign. By showcasing the
			features, benefits, and user experience of the app, you have effectively communicated its
			value to both current and prospective members.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685847282/vrun-video-editing/Villians%20App%20Previews/Full_Vid_with_hiphop_csyb3u.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Mobile App Promotional Videos</p>
		</div>

		<p>
			Throughout my collaboration with Villains Gym, I have closely collaborated with their
			marketing team to align your brand guidance strategies with their objectives. By creating
			visually appealing and emotionally resonant content, I have helped Villains Gym establish a
			strong digital presence and engage their target audience across multiple platforms.
		</p>

		<div class="BGvideo">
			<video
				class="BGvideoMain"
				src="https://res.cloudinary.com/dxc5p65tt/video/upload/v1685848168/vrun-video-editing/Villians%20Testimonials/Villians_Brendon_Website_testimonial_Edited_npzpnx.webm"
				controls
				autoplay
				muted
				loop
			/>
			<p class="spanBG">Testimonial from the Owner of Villains Strength & Conditioning</p>
		</div>

		<h1>Thankyou,</h1>
		<h1 class="smallH1">from Varun</h1>
	</div>
</div>

<style>
	.smallH1 {
		font-size: 1rem;
		font-family: 'Monument';
	}
	.BGImageMain {
		width: 100%;
	}
	.BGImage {
		width: 100%;
		margin: 10px 0;
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
