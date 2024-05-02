import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "3.2.4"
	id("io.spring.dependency-management") version "1.1.4"
	kotlin("jvm") version "1.9.23"
	kotlin("plugin.spring") version "1.9.23"
	kotlin("plugin.jpa") version "1.9.23"
}

group = "com.menubites"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
	mavenCentral()
	maven { url = uri("https://repo.spring.io/milestone") }
}

extra["springAiVersion"] = "0.8.1"

dependencies {
	//Web
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.springframework:spring-web:6.1.6")
	implementation("org.jetbrains.kotlin:kotlin-reflect")

	// IA
	//implementation("org.springframework.ai:spring-ai-openai-spring-boot-starter")

	developmentOnly("org.springframework.boot:spring-boot-devtools")

	// Database
	runtimeOnly("com.mysql:mysql-connector-j")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")

	// Security
	implementation("org.springframework.boot:spring-boot-starter-oauth2-resource-server:3.2.2")
	implementation("org.springframework.boot:spring-boot-configuration-processor:3.2.2")
	implementation("org.springframework.security:spring-security-config:6.2.1")
	implementation("org.springframework.security:spring-security-oauth2-jose:6.2.1")


	//Test
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.springframework.boot:spring-boot-testcontainers")
	testImplementation("org.testcontainers:junit-jupiter")
	testImplementation("org.testcontainers:mysql")
}

dependencyManagement {
	imports {
		mavenBom("org.springframework.ai:spring-ai-bom:${property("springAiVersion")}")
	}
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs += "-Xjsr305=strict"
		jvmTarget = "17"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
