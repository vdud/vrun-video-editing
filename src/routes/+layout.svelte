<script lang="ts">
	import '$lib/assets/app.css';
	import topLeft from '$lib/assets/topLeft.webp';
	import hamburger from '$lib/assets/hamburger.webp';
	import headshot from '$lib/assets/headshot.webp';
	import { currentPage } from '$lib/stores/currentPage';

	let isMenuShow = false;

	const btnClick = () => {
		const mainBody = document.getElementById('mainBody') as HTMLDivElement;
		if (!mainBody) return;

		if (!isMenuShow) {
			mainBody.style.transform = 'translateY(0px)';
			isMenuShow = true;
		} else {
			mainBody.style.transform = 'translateY(-50px)';
			isMenuShow = false;
		}
	};
	let name = '';
	let email = '';
	let message = '';

	const hangleSendMsg = async () => {
		if (!name || !email || !message) {
			alert('Please fill all the fields');
			return;
		}
		if (!email.includes('@')) {
			alert('Please enter a valid email');
			return;
		}

		name = '';
		email = '';
		message = '';
		const res = await fetch('/api/sendaMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		});
		const response = await res.json();
		if (response.success) {
			alert('Email sent!');
		}
	};

	const scrollToProjects = () => {
		const projects = document.getElementById('projects') as HTMLDivElement;
		if (!projects) return;
		projects.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToContact = () => {
		const contact = document.getElementById('contact') as HTMLDivElement;
		if (!contact) return;
		contact.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="mainBody" id="mainBody">
	<div class="navigaation">
		<button class="menuBtns" on:click={scrollToProjects}>Portfolio</button>
		<button class="menuBtns" on:click={scrollToContact}>Contact</button>
	</div>
	<div class="layoutContent">
		<div class="menuButton">
			<button on:click={btnClick} class="btnSquare">
				<img class="hamburgerMenu" src={hamburger} alt="hamburger Menu" />
			</button>
		</div>
		<div class="topLeft">
			<img src={topLeft} class="topLeftImg" alt="pro verified" />
		</div>

		<div class="header">
			<div class="textHeaderBox">
				<h1 class="h1Header">Varun Dudeja</h1>
				<p class="spanR"><span>video editor</span></p>
			</div>
		</div>

		<div class="EyeCatch">
			<div class="gradients" />
			<div class="eyeCatchTexts">
				<h3>Ayy</h3>
				<p>Namaste 🙏🏽</p>
				<p class="smallP">
					Varun: A multi-talented creative professional with expertise in video editing, brand
					guidance, graphic design, and animation. Passionate about storytelling and visual
					aesthetics, Varun brings visions to life, leaving a lasting impression through his diverse
					range of skills.
				</p>
			</div>
			<div class="eyeCatchCatch">
				<img class="EyeImg" src="https://source.unsplash.com/ZdOsQiwp0Ss" alt="VideoEditor" />
			</div>
		</div>

		<div class="Expertees">
			<p class="exprTexts">Adobe After Effects</p>
			<p class="exprTexts">:</p>
			<p class="exprTexts">Adobe Premiere Pro</p>
			<p class="exprTexts">:</p>
			<p class="exprTexts">Blender</p>
			<p class="exprTexts">:</p>
			<p class="exprTexts">Adobe Photoshop</p>
			<p class="exprTexts">:</p>
			<p class="exprTexts">Adobe Illustrator</p>
		</div>

		<div class="quoteBox">
			<div class="quote">
				<p class="quoteText">Good Artists Copy, Great Artists Steal</p>
				<p class="spanR"><span class="Pb26">-Pablo Picasso</span></p>
			</div>
		</div>

		<div class="Projects" id="projects">
			<div class="projAndAbt">
				<div class="dataContainer allProjects">
					<div class="headerProj"><h3>PROJECTS</h3></div>
					<div class="projContainer">
						<a
							class="aRefProjects {$currentPage === 'brand-guidance' ? 'activeBtn' : ''}"
							href="/brand-guidance">Brand Guidance</a
						>
						<a
							class="aRefProjects {$currentPage === 'animation-portfolio' ? 'activeBtn' : ''}"
							href="/animation-portfolio">Animation</a
						>
						<a
							class="aRefProjects {$currentPage === 'personal-projects' ? 'activeBtn' : ''}"
							href="/personal-projects">Personal Projects</a
						>
					</div>
				</div>
				<div class="dataContainer aboutProjects">
					<div class="headerProj"><h3>ABOUT</h3></div>
					<div class="slotText">
						<slot />
						<div class="tenMargin" />
					</div>
				</div>
			</div>
		</div>

		<div class="sendAMessage" id="contact">
			<div class="sendAmsgContents sendAmsgText">
				<h2>Send a Message</h2>
				<p>say anything about your project...</p>
			</div>
			<div class="sendAmsgContents sendAmsgInputs">
				<div class="inputContainers">
					<label for="name" class="pTextSend">Name:</label>
					<input type="text" name="name" placeholder="Name" bind:value={name} />
				</div>
				<div class="inputContainers">
					<label for="email" class="pTextSend">Email:</label>
					<input type="email" name="email" placeholder="Email" bind:value={email} />
				</div>
				<div class="inputContainers">
					<label for="message" class="pTextSend">Message:</label>
					<textarea name="message" placeholder="Message" bind:value={message} />
				</div>
				<button on:click={hangleSendMsg} class="sendBtn">SEND</button>
			</div>
		</div>

		<div class="footer">
			<div class="allFooterLinks" id="footerH2Main">
				<a href="https://github.com/vdud" target="_blank" rel="noopener noreferrer"
					><h2 class="footerH2">GitHub</h2></a
				>
				<a href="https://www.youtube.com/@CallForDesign" target="_blank" rel="noopener noreferrer"
					><h2 class="footerH2">YouTube</h2></a
				>
				<a
					href="https://www.instagram.com/animewhisperer/"
					target="_blank"
					rel="noopener noreferrer"><h2 class="footerH2">InstaGram</h2></a
				>
			</div>
			<div class="createdBy">
				<p>Created by Varun Dudeja</p>
			</div>
			<div class="absHeadshot">
				<img class="headShotImg" src={headshot} alt="headshot" />
			</div>
		</div>
	</div>
</div>

<style>
	a {
		color: #fff;
	}
	.footerH2 {
		font-size: clamp(1.2rem, 3vw, 2rem);
		line-height: clamp(1.1rem, 3vw, 1.9rem);
		text-align: center;
		color: #0000;
		-webkit-text-stroke: 0.1px black;
		transition: color 0.3s ease-in-out;
	}
	.footerH2:hover {
		color: #000;
		-webkit-text-stroke: 0px black;
	}

	.allFooterLinks {
		position: absolute;
		bottom: 0;
		right: 0;
		margin: 10px;

		display: flex;
		flex-direction: column;
		align-items: end;
	}
	.menuBtns {
		padding: 4px 10px;
		border-radius: 3px;
		font-size: 1.2rem;
	}
	.hamburgerMenu {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.btnSquare {
		width: 40px;
		height: 40px;
		background-color: transparent;
		margin: 10px;

		cursor: pointer;
	}
	.h1Header {
		font-size: clamp(1.2rem, 5vw, 2rem);
	}
	.headShotImg {
		height: 210px;
		transform: translateY(20px);

		z-index: 10000;
	}
	.footer {
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: end;
		z-index: 10000;
	}

	.createdBy {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: #3339;
	}
	.sendAmsgText {
		padding: 10px;
	}
	.pTextSend {
		margin: 0 10px;
		width: 50px;
	}
	.inputContainers {
		display: flex;
		justify-content: space-between;
	}
	.sendBtn {
		padding: 5px 10px;
		margin: 0 10px;
		cursor: pointer;
		background-color: #000;
		color: #fff;
		border-radius: 10px;
		font-family: 'Monument';
	}
	input,
	textarea {
		padding: 2px 10px;
		margin: 0 10px;
		background-color: #eee9;
		width: 80%;
	}
	textarea {
		height: 100px;
		resize: none;
	}
	.sendAmsgInputs {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: relative;
	}
	.sendAMessage {
		display: flex;
		height: 200px;
	}
	.sendAmsgContents {
		width: 50%;
	}

	.dataContainer {
		width: 100%;
		height: 100%;
	}
	.tenMargin {
		height: 53px;
	}
	.aboutProjects {
		overflow: hidden;
	}
	.slotText {
		height: 100%;
		padding: 0 10px;
		display: block;
	}
	.aRefProjects {
		text-decoration: none;
		color: #000;
		padding: 5px 10px;
		border-radius: 3px;
		transition: all 0.2s ease-in-out;
		font-size: clamp(1rem, 3vw, 2.4rem);
	}
	.aRefProjects:hover {
		background-color: #0009;
		color: #fff;
	}

	.activeBtn {
		background-color: black;
		color: white;
	}

	.projContainer {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 90%;
		overflow: hidden;
	}
	.allProjects {
		border-right: 1px solid black;
		overflow: hidden;
	}
	.headerProj {
		height: 10%;
		text-align: center;
		border-bottom: 1px solid black;

		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem;
	}
	.projAndAbt {
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.Projects {
		width: calc(100% - 10px);
		height: 500px;
		margin: 5px;
		border: 1px solid black;
		border-radius: 5px;
		margin-bottom: 10px;
	}
	.Pb26 {
		color: #2229;
		font-size: 1.1rem;
	}
	.quoteText {
		margin: 5px;
	}
	.quoteBox {
		width: 100%;
		height: 60px;
		margin: 10px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #3332;
		overflow: hidden;
	}
	.quote {
		width: fit-content;
		transform: translateY(5px);
		color: #3338;
	}
	.exprTexts {
		font-size: clamp(0.8rem, 1.5vw, 1.5rem);
		color: #3338;
	}
	.Expertees {
		width: 100%;
		height: 40px;
		/* background-color: #666; */
		margin-top: 10px;

		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.eyeCatchTexts {
		z-index: 2;
		width: 60%;
		text-align: right;

		padding: 0 20px;
		float: right;
	}
	.gradients {
		width: 100%;
		height: 200px;
		background: linear-gradient(0deg, #fff 1%, #0000 90%),
			linear-gradient(180deg, #fff 1%, #0000 90%);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.eyeCatchCatch {
		width: 100%;
		position: absolute;
		transform: translateY(-30%);
		top: 0;
		left: 0;
	}
	.EyeImg {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}
	.EyeCatch {
		height: 200px;
		display: flex;
		justify-content: end;
		align-items: center;

		overflow: hidden;

		position: relative;
	}
	.textHeaderBox {
		transform: translateY(10px);
	}
	.spanR {
		text-align: right;
		width: 100%;
		transform: translateY(-10px);
		font-size: 1.3rem;
	}
	.topLeft {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10000;
	}
	.topLeftImg {
		width: clamp(120px, 20vw, 225px);
	}

	.header {
		width: 100%;

		overflow: hidden;

		height: 60px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		text-align: center;
	}

	.navigaation {
		width: calc(100% - 20px);
		margin-bottom: 10px;
		height: 40px;

		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.mainBody {
		width: 100%;
		background-color: #333;
		padding: 10px;
		transform: translateY(-50px);
		transition: transform 0.5s ease-in-out;
	}

	.menuButton {
		position: absolute;
		top: 0;
		right: 0;
	}

	.layoutContent {
		width: calc(100% - 20px);
		/* height: 2000px; */
		background-color: #fff;
		box-shadow: 0 0 10px #000;
		border-radius: 10px;
		position: relative;
	}

	@media screen and (max-width: 768px) {
		.sendAmsgText {
			text-align: center;
			padding: 10px 0;
		}
		.sendAMessage {
			flex-direction: column;
			justify-content: space-between;
			height: 300px;
		}
		.sendAmsgText {
			height: 20%;
		}
		.sendAmsgInputs {
			height: 80%;
		}
		.sendAmsgContents {
			width: 100%;
		}
		.allProjects {
			width: 40%;
		}
		.projContainer {
			align-items: start;
			margin-left: 10px;
		}
	}
</style>
