<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld :msg="helloMsg"/>
		<button @click="signIn">Sign in</button>
		<button @click="signOut">Sign out</button>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import { signInWithGoogle, signOut } from "@/auth";

export default {
	name: "HomeView",
	components: {
		HelloWorld,
	},
	data() {
		return {
		};
	},
	computed: {
		helloMsg() {
			return `Welcome to Your Vue.js App, ${this.$store.state.user.displayName || "Guest"}`;
		},
	},
	methods: {
		signIn() {
			signInWithGoogle().then(() => {
				this.$store.commit("notify", "signinout", "info", `Successfully signed in as ${this.$store.state.user.email}`);
				alert(`Successfully signed in as ${this.$store.state.user.email}`);
				this.$router.push("/about");
			});
		},
		signOut() {
			signOut().then(() => {
				this.$store.commit("notify", "signinout", "error", "Successfully signed out");
				alert("Successfully signed out");
			});
		},
	},
};
</script>
<!-- vim: set sw=4 ts=4 noet list: -->
