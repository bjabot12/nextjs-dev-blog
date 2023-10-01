---
title: 'picoCTF Writeup - Capture The Flag intro'
date: 'October 1, 2023'
excerpt: 'Introduction to CTFs and writeups for some of the tasks in picoCTF'
cover_image: '/images/posts/post3/ctf.jpg'
---
\
&nbsp;

# picoCTF Writeups

Recently I have gotten in to CTFs as a way to improve my cyber security skills in a practical way, and I have really been enjoying it. Therefore I decided to write a post about it.

## What are CTFs?


Capture The Flag contests, often abbreviated as CTFs, are exciting and competitive cybersecurity challenges that test participants' skills in various aspects of information security. These contests are designed to simulate real-world scenarios, where participants must employ a combination of technical knowledge, problem-solving abilities, and creativity to solve a series of puzzles and security-related challenges.

In a CTF competition, participants, often referred to as "ethical hackers" or "white hat hackers," face a wide range of tasks that mimic the kinds of problems encountered in securing computer systems, networks, and applications. These challenges can include tasks like exploiting vulnerabilities, reverse engineering, cryptography, web application security, and more.

The primary objective of a CTF is to "capture the flag," which is a digital token or piece of information hidden within the contest's infrastructure. Participants must employ their expertise to uncover and retrieve these flags, usually by identifying and exploiting security flaws or vulnerabilities in the provided systems.

CTFs are not only a thrilling way for cybersecurity enthusiasts to showcase their skills but also serve as valuable training opportunities for individuals seeking to improve their abilities in the field of cybersecurity. These contests are organized at various levels, from local and regional events to international competitions, and they attract participants from diverse backgrounds, including students, professionals, and security enthusiasts, all aiming to demonstrate their prowess in the ever-evolving world of cybersecurity.

\
&nbsp;

## PicoCTF


PicoCTF is a popular online Capture The Flag (CTF) competition specifically designed for students and beginners in the field of cybersecurity. It is organized by the Carnegie Mellon University's CyLab Security and Privacy Institute. PicoCTF provides a welcoming and educational environment for participants to learn about various aspects of cybersecurity through hands-on challenges and puzzles.

Key features of PicoCTF include:

Educational Focus: PicoCTF is known for its educational approach, making it an excellent platform for students and those new to cybersecurity. The challenges are designed to introduce and teach fundamental concepts in areas such as cryptography, reverse engineering, web security, and more.

Beginner-Friendly: The competition is beginner-friendly, meaning it caters to participants with varying levels of experience in cybersecurity. It's an ideal starting point for individuals looking to build their skills and knowledge in this field.

Online Format: PicoCTF is typically conducted online, allowing participants from around the world to compete. This format makes it accessible to a broad and diverse audience.

Time-Limited: The competition is time-limited, usually spanning a few weeks or months, during which participants must solve challenges and accumulate points. This adds an element of excitement and urgency to the contest.

Diverse Challenges: PicoCTF offers a wide range of challenges that cover a variety of topics, ensuring participants gain exposure to different areas of cybersecurity. Challenges often include solving puzzles, finding vulnerabilities in software, analyzing code, and decrypting messages.

Team and Individual Participation: Participants can compete individually or form teams, fostering collaboration and teamwork skills among participants.

Free and Open to All: PicoCTF is typically free to enter and open to anyone interested in cybersecurity, making it accessible to students, professionals, and hobbyists alike.

Overall, PicoCTF serves as an excellent entry point into the world of cybersecurity, providing an engaging and educational platform for individuals to learn and hone their skills while having fun solving challenging puzzles and tasks.

\
&nbsp;
## Setup 
I am using Kali Linux. Kali Linux is a powerful and widely used open-source operating system specifically designed for cybersecurity professionals, ethical hackers, and penetration testers. It is renowned for its robust suite of tools and resources tailored to support various aspects of cybersecurity assessment, testing, and defense.

Originally derived from Debian, Kali Linux offers a secure and versatile environment that comes pre-loaded with an extensive collection of cybersecurity tools. These tools cover a wide spectrum of tasks, including network analysis, vulnerability assessment, penetration testing, digital forensics, and ethical hacking.

\
&nbsp;
## Writeups
A good way to improve CTF skills is to read and/or write solutions to challenges, aka Writeups. These are both beginner/easy challenges in the "Web exploitation" category.


### Challenge "Insp3ct0r" picoCTF

When we open the challenge we are presented with the following:

![Challenge 2](/images/posts/post3/challenge2.png)

When we click the link, we get:

![Website 2](/images/posts/post3/site2.png)

Both from the title of the challenge, it is pretty obvious that the we need to inspect the website.

When we inspect the HTML, CSS and JavaScript we get:

```htmlembedded

<!doctype html>
<html>
  <head>
    <title>My First Website :)</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="mycss.css">
    <script type="application/javascript" src="myjs.js"></script>
  </head>

  <body>
    <div class="container">
      <header>
	<h1>Inspect Me</h1>
      </header>

      <button class="tablink" onclick="openTab('tabintro', this, '#222')" id="defaultOpen">What</button>
      <button class="tablink" onclick="openTab('tababout', this, '#222')">How</button>
      
      <div id="tabintro" class="tabcontent">
	<h3>What</h3>
	<p>I made a website</p>
      </div>

      <div id="tababout" class="tabcontent">
	<h3>How</h3>
	<p>I used these to make this site: <br/>
	  HTML <br/>
	  CSS <br/>
	  JS (JavaScript)
	</p>
	<!-- Html is neat. Anyways have 1/3 of the flag: picoCTF{tru3_d3 -->
      </div>
      
    </div>
    
  </body>
</html>
```

```css
div.container {
    width: 100%;
}

header {
    background-color: black;
    padding: 1em;
    color: white;
    clear: left;
    text-align: center;
}

body {
    font-family: Roboto;
}

h1 {
    color: white;
}

p {
    font-family: "Open Sans";
}

.tablink {
    background-color: #555;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    width: 50%;
}

.tablink:hover {
    background-color: #777;
}

.tabcontent {
    color: #111;
    display: none;
    padding: 50px;
    text-align: center;
}

#tabintro { background-color: #ccc; }
#tababout { background-color: #ccc; }

/* You need CSS to make pretty pages. Here's part 2/3 of the flag: t3ct1ve_0r_ju5t */
```

```javascript
function openTab(tabName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
	tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    if(elmnt.style != null) {
	elmnt.style.backgroundColor = color;
    }
}

window.onload = function() {
    openTab('tabintro', this, '#222');
}

/* Javascript sure is neat. Anyways part 3/3 of the flag: _lucky?f10be399} */
```

We can see that the flag is added as comments in three different parts. When we add them together we get ```picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?f10be399}``` and the challenge is completed.

---

\
&nbsp;

### Challenge "login" picoCTF
When we open the challenge we are presented with the following:

![Challenge 1](/images/posts/post3/challenge1.png)

We are only provided with a link to what looks to be a website, if we open it we get: 

![website](/images/posts/post3/website.png)

First I tried the usual ``` ' or 1==1; -- ```, but that did not work.

Next step is to try Inspect and look at source code, when we do this we get

```htmlmixed=

<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <script src="index.js"></script>
    </head>
    <body>
        <div>
          <h1>Login</h1>
          <form method="POST">
            <label for="username">Username</label>
            <input name="username" type="text"/>
            <label for="username">Password</label>
            <input name="password" type="password"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
    </body>
</html>
```

First thing I noticed was ``` ìndex.js ```, so we take a look at that.

```javascript=
(async () =>
{
	await new Promise((e => window.addEventListener("load", e))), document.querySelector("form").addEventListener("submit", (e =>
	{
		e.preventDefault();
		const r = {
				u: "input[name=username]",
				p: "input[name=password]"
			},
			t = {};
		for (const e in r) t[e] = btoa(document.querySelector(r[e]).value).replace(/=/g, "");
		return "YWRtaW4" !== t.u ? alert("Incorrect Username") : "cGljb0NURns1M3J2M3JfNTNydjNyXzUzcnYzcl81M3J2M3JfNTNydjNyfQ" !== t.p ? alert("Incorrect Password") : void alert(`Correct Password! Your flag is ${atob(t.p)}.`)
	}))
})();
```

We can see that it checks if username or password is different from ```YWRtaW4``` or ```cGljb0NURns1M3J2M3JfNTNydjNyXzUzcnYzcl81M3J2M3JfNTNydjNyfQ``` respectively, but no luck.

But, if we input the password ```cGljb0NURns1M3J2M3JfNTNydjNyXzUzcnYzcl81M3J2M3JfNTNydjNyfQ``` to [CyberChef](https://gchq.github.io/CyberChef/) with the ```Magic``` operation, it outputs:

![flag1](/images/posts/post3/flag1.png)

We can see that the flag is was decoded using Base64, and the flag is ```picoCTF{53rv3r_53rv3r_53rv3r_53rv3r_53rv3r}``` and the challenge is completed