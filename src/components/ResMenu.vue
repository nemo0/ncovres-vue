<template>
        <!-- Main -->
		<div id="main">

			<!-- One -->
			<section id="one" class="tiles">
				<article>
					<span class="image">
						<img src="images/pic01.jpg" alt="" />
					</span>
					<header class="major">
						<h3><router-link to="/doctor" class="link">Doctors</router-link></h3>
						<p>Find doctors based on your district.</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img src="images/pic02.jpg" alt="" />
					</span>
					<header class="major">
						<h3><router-link to="/oxygen" class="link">Oxygen</router-link></h3>
						<p>Find oxygen suppliers based on your district</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img src="images/pic03.jpg" alt="" />
					</span>
					<header class="major">
						<h3><router-link to="/ambulance-hospitals" class="link">Ambulance and Hospitals</router-link></h3>
						<p>Find numbers of ambulance and hospitals</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img src="images/pic04.jpg" alt="" />
					</span>
					<header class="major">
						<h3><router-link to="/ngos" class="link">NGOs</router-link></h3>
						<p>Find NGOs working in your area</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img src="images/pic05.jpg" alt="" />
					</span>
					<header class="major">
						<h3><router-link to="/blood-plasma" class="link">Blood and Plasma Helpline</router-link></h3>
						<p>List of helplines for finding blood and plasma</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img src="images/pic06.jpg" alt="" />
					</span>
					<header class="major">
						<h3><router-link to="/other" class="link">Other</router-link></h3>
						<p>Other Resources</p>
					</header>
				</article>
			</section>

    </div>
</template>
<script>
export default {
  name: 'ResMenu',
}
</script>