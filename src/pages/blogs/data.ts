interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  image?: string;
}

// Demo blog posts data - replace with your database fetch
const blogPosts: Record<string, BlogPost> = {
  "1": {
    id: "1",
    title: "Example Blog Post",
    date: "2024-04-15",
    excerpt:
      "This is a demo showing how markdown rendering works with syntax highlighting",
    content: `# Welcome to My Blog

This is an example post showing **markdown** rendering with _syntax highlighting_.

## Code Example

Here's some JavaScript code:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}

greet('World');
\`\`\`

## Python Example

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

## Features

- Syntax highlighting ✓
- **Bold** and *italic* text
- \`inline code\`
- Links: [Visit GitHub](https://github.com)

> This is a blockquote with some wisdom.

### Lists Work Too

1. First item
2. Second item
3. Third item

---

*Replace this demo content with your database markdown!*
`,
  },
  "3": {
    id: "3",
    title: "Are you really mature?",
    date: "2024-08-19",
    content: `# Are You Really Mature?

## 4 Key Indicators to Find Out

Maturity is a key part of growing up, but it’s important to note that some individuals may age without truly maturing. I firmly believe that maturity isn’t fully relate to age, especially when considering factors beyond just physical development. You may have encountered situations where someone appears older but lacks maturity, highlighting that age isn’t everything. In other hands, there are those in their 20’s who exude a sense of maturity. Let’s explore four key indicators that can help you determine if you are mature.

### **1. You start to stand up, stop blaming others and start making hard decision**

It’s evident that maturity often comes hand in hand with a certain degree of leadership. Essentially, it’s about taking the necessary actions. Many people struggle to make sound decisions because they get caught up in blaming others. When you’re focused on blame, you can’t move forward. Life-changing experiences typically arise from making choices and owning the results. This is a significant aspect of being mature.

### **2. You are ready to make sacrifice**

A clear example of this is parenting. As a child, I had no understanding of the immense sacrifices my parents made to raise me from infancy to adulthood. It takes a lot of time and financial resources to nurture someone into a good member of society, and that’s no small feat. When you have someone relying on you, it often means putting their needs ahead of your own desires. To sum it up, you won’t always receive what you desire. It’s include the ability of forego the sour for sweet.

### **3. You control your own emotions.**

Emotional maturity means taking a moment to think before you react to things that trigger you, allowing you to respond calmly instead of just reacting impulsively.

### **4. You are comfortable in your own skin**

I encountered this statement from Dry Creek Wrangler School on YouTube, and I find it to be profoundly insightful, reflecting a level of wisdom associated with maturity. It emphasizes the importance of embracing one’s true self rather than comparisons with others. Understanding your identity, as is the ability to simplify your life. You possess a sense of confidence internally.

Maturity isn’t just about age. It’s how a person approaches life and circumstance. It includes qualities like self-control, empathy, reliability, and the ability to learn from experiences. Essentially, you grow wiser and has broader view when life goes on. In overall these might not be the ultimate indicators. I hope these indicators will help us observe ourselves. Life is never stagnant; you’re either growing or fading.

> The idea is that flowing water never goes stale, so just keep on flowing. ― Bruce Lee`,
  },
  "4": {
    id: "4",
    title: "Antifragile Living",
    date: "2024-09-08",
    content: `
In 2022, I had the opportunity to meet a new co-worker who worked on the same project as I did. I found him to have an interesting and creative approach to solving complex problems and not rely on habits or routines as solutions. His calm demeanor when facing challenges was remarkable. Although we had not been close, we had an ice-breaking session one day, despite having worked remotely for almost a year (as you know, remote work during the post-COVID era). During this session, he recommended a book that influenced his philosophy: Antifragile by Nassim Nicholas Taleb. He explained that it presents a mindset that benefits from a world full of volatility. That was the first time I had heard of this book, and I have been interested in it ever since.

**What is Antifragile?**
------------------------

I believe you are already familiar with the concept of fragility. Fragile items are those that can be easily broken. I appreciate how the book describes fragility as akin to a parcel that should be labeled ‘Please handle with care,’. Fragile should be at best unharmed. Conversely, if we consider the opposite scenario, it would be labeled ‘Please handle carelessly,’ which does not correspond to robustness or resilience. Robustness means that an item remains at best or at worst unharmed or we can describe that items as neither break nor improve therefor we will not put label on that parcel. The term ‘Antifragile’ is used to describe something that goes beyond being robust or resilient. While robustness resists shocks and remains the same, antifragility actually improves from such disturbances.

To elaborate, fragile are things that get easily damaged by shocks, randomness, and changes. Robust things can handle these without being affected. Antifragile actually gains and improve from these disturbances. For example, a glass plate is fragile. Any disturbances can break it. The mythical phoenix is robust in the sense that it doesn’t die; it continually regenerates and returns to its original state. Muscles is antifragile system because thrive under pressure (up to a point) and growing stronger when strained.

![Fragile = concave; Antifragile = convex](https://miro.medium.com/v2/resize:fit:1142/format:webp/1*D8mfeJAGi7CzFARMjJ1Alw.png)

> Antifragile embodies Friedrich Nietzsche’s quote, “What does not kill us makes us stronger.”

**Becoming Antifragile**
------------------------

**Embrace Challenges**

Actively seek volatility and step out of your comfort zone to explore new opportunities rather than clinging to the familiar. Embrace challenges and use them as opportunities for growth. Whenever you feel too comfortable, it might be time to focus on the tasks that are not urgent but important according to the Eisenhower Matrix.

**Diversify**

For example in investment world. Spread your risks and exposures across different areas. This way, when one area is affected negatively, others may benefit or remain unaffected. The book talks about the Barbell Strategy which blends a safe approach with a speculative one, is considered more robust than a single-mode strategy and is often essential for achieving antifragility.

**Continuous Learning**

learning new skills is essential in a rapidly changing world. It helps you stay adaptable, open to new opportunities. Adopt a mindset of lifelong learning and curiosity.

Adopting an antifragile approach will certainly benefit you in a world characterized by chaos and rapid change. However, each individual has their own capacity to manage risk and safety. It is essential to push yourself to the limit that you can responsibly manage.

> T. S. Eliot aptly stated, “Only those who risk going too far can possibly find out how far one can go.”

There are numerous additional examples and case studies described in the book. I hope this article sparks your interest.`,
  },
  "5": {
    id: "5",
    title: "Why I Stopped Rushing and Started Planning",
    date: "2025-04-14",
    excerpt:
      "I used to be someone who always felt rushed, but I’ve come to realize that rushing isn’t always the best approach. In this article, I want to share my personal observations and experiences about why I stopped rushing and started planning, and how it has impacted my work and well-being.",
    content: `
![This photo was taken in Na Chom Thian, Chonburi, Thailand.](https://miro.medium.com/v2/resize:fit:700/format:webp/1*jhNdbji7wdSwybmWXqWfQQ.jpeg)

> Disclaimer: This article is based on my personal observations and experiences. It may not apply to everyone, but I hope some of you will find it relatable.

What kind of rushing am I talking about?
----------------------------------------

First of all, I’ve always been someone who tries to complete whatever task I’m assigned. This mindset started back in high school, not because I was particularly attentive in class, but because I was raised with a strong sense of responsibility. Like many kids raised in middle-class Asian families, I was taught to do whatever teachers told me, regardless of whether it made sense or not.

Looking back, I realize how naive that was. I didn’t practice critical thinking at the time, I just followed instructions without question. (Of course, I’ve since learned the value of critical thinking and how to properly frame questions.) That behavior, though, made me a pretty ideal entry-level employee.

After graduating from university, I found that tasks became more complex over time, whether due to your role, responsibilities, or position. You often have multiple things on your plate, all seemingly urgent. Even with prioritization in place, you sometimes feel your progress isn’t fast enough. That’s when the feeling of being “in a rush” kicks in.

For example, after going through a high-pressure situation once, the next time something similar comes up, you might start rushing from the very beginning. Even if the new situation is different, the fear of running out of time kicks in early. When you make decisions like this repeatedly over the years, that mindset becomes a habit, a default way of thinking and feeling.

Sometimes, it works out. You finish everything before the deadline and feel productive. But there are trade-offs. There are also times when it backfires you misjudge the time needed, get overwhelmed, and miss the deadline anyway. And even if you learn from the experience, the stress and pressure from constantly rushing can be immense. It’s not healthy, and it’s certainly not something you should consistently sacrifice yourself for, especially not just for the sake of your company.

As I reflect more, I’ve come to understand the feeling I’m describing: it’s the state of feeling rushed. Don’t confuse this with a sense of urgency. Knowing your priorities and starting promptly is important, but that doesn’t mean you need to feel rushed.

The Drawbacks of Rushing
------------------------

1. **Rushing the process increases the risk of mistakes.**
		When you’re in a hurry, your attention narrows. You skip over small details, make assumptions, and react instead of thinking things through. That might work once or twice, but over time, it leads to avoidable errors, ones that could’ve been prevented with just a bit more care or reflection.

2. **Not everything allows for shortcuts.**
		Some tasks demand full attention, or deep thinking. Trying to “speedrun” them often backfires. You might get to the end quicker, but the quality suffers, or worse, you miss the point entirely.

3. **You miss out on valuable learning opportunities.**
		When you’re rushing, you’re often in such a hurry to finish that you don’t fully absorb what you’re doing. You complete the task, sure, but you don’t take time to understand the why behind it. Over time, this builds a shallow skill set, where you’ve done many things but mastered few.

4. **It creates unconscious stress that builds over time.**
		You might not even realize how much pressure you’re putting on yourself. But constantly operating in “rush mode” takes a toll. Eventually, you hit the wall, because no matter how hard you try, you can’t control every variable. when your system depends on everything going fast and perfectly, you’re left anxious and burnt out the moment it doesn’t.

Thoughtful Planning
-----------------------------------------

The mindset shift that helped me was this: I now prefer to invest time in thoughtful planning, breaking tasks down, creating the most concrete plan I can, and then simply sticking to it. I focus on being present, learning what needs to be learned along the way. This approach feels more sustainable and far healthier in the long run. I were told to act fast, because I weren’t mature yet. But doing things quickly is relative. You can move fast and still go in the wrong direction. You can take your time and still finish faster in the end. It’s all about perspective.

Ultimately, it all comes down to self-management and the ability to regulate one’s thoughts. Even when experiencing a sense of urgency or pressure, it is still possible to develop and execute an efficient plan. The key lies in managing one’s thoughts with intention and awareness. Although I still encounter moments of feeling rushed, I am now more conscious of these experiences compared to the past, which enables me to respond more effectively.`,
    image:
      "https://miro.medium.com/v2/resize:fit:700/format:webp/1*jhNdbji7wdSwybmWXqWfQQ.jpeg",
  },
  "6": {
    id: "6",
    title: "My Unexpected Journey with Vim Motions",
    date: "2025-06-22",
    content: `

As developers, we’re always seeking that edge whether it’s writing cleaner code, shipping features faster, or simply finding more joy in the daily grind. For me, that quest led me down an unexpected path, the world of Vim. What started as a casual observation during a pair programming session has since transformed how I interact with my code, my terminal, and even my understanding of personal learning.

A Colleague’s Vim Magic
------------------------------------------

My first real encounter with Vim wasn’t in a dusty old terminal, but right there in the familiar glow of VSCode. I was pair programming with a colleague from a ex-company, and to my mind surprise, his editor had the Vim extension turned on. I’d dabbled with 'vi' from time to time on servers, mostly out of necessity to make quick configuration changes. My knowledge was limited to the absolute basics: 'i' for insert, 'esc' to exit insert mode, 'hjkl' for navigation, and of course, the sacred ':wq' or ':q!' to quit. Seeing him fly through code without ever touching the mouse, even then, I thought, "That's cool. Maybe someday. I will learn it when I have time.".

Later on, I installed the Vim extension in my own VS Code setup. But when the deadlines come and the pressure mounted, old habits emerge. My muscle memory for clicking, dragging, and quick keyboard shortcuts with the mouse was deeply ingrained. I was fast with my comfort method, and the initial awkwardness of Vim motions felt like a roadblock. The motivation wasn’t strong enough, and the extension became something I’d turn on and off, a curious experiment rather than a committed practice.

![from https://www.learntermux.tech/2023/03/vim-text-editor.html](https://miro.medium.com/v2/resize:fit:1166/format:webp/1*5M66BiBUKY-HMXwbgtB8sw.png)

The Turning Point
------------------------------------------------------

My primary domain has always been frontend development, meaning JavaScript and TypeScript are my bread and butter. While I’ve picked up C, C++, C#, and Java in the past, I never truly mastered them or formed strong opinions on their deeper features, generally sticking to SOLID principles. The desire to broaden my language arsenal was a constant.

Then came the YouTube deep dives. As I explored new programming languages and frameworks, particularly in the Go community (which seemed to have a strong Vim following), I noticed a recurring theme: almost every seasoned developer on these channels seemed to navigate their code with Vim. They were incredibly fast, seemingly performing magic without ever reaching for the mouse. It wasn’t that my mouse-and-keyboard combo was slow it was efficient for _me_. But watching them, it felt like an entirely different league of interaction, like truly “talking to the machine” in a way that certainly looked like hacking.

A seed was planted: Could I do that? Could I learn this once and apply it everywhere? The thought was particularly appealing as I considered diving deeper into backend development, where navigating servers and interacting with text-based environments is far more common.

Embracing the Suck: The Path to Muscle Memory
---------------------------------------------

The transition wasn’t immediate, and it certainly wasn’t without its frustrations. Initially, even simple edits felt like a wrestling match. My brain screamed for the comfort of the mouse, the familiar 'Ctrl+C' and 'Ctrl+V'. But I persisted, learning to “yank” and “paste” a process that felt a bit like a game in itself. I began forcing myself to use Vim motions for navigation, even if it meant doing things slower at first. To push myself, I decided that during any overtime work, I would _only_ use Vim motions. This way, even while completing tasks, I was doing something for myself, turning a chore into a self-improvement challenge.

This phase is where the real learning happens. It’s about **embracing the suck long enough to become better at it.** With enough practice, it becomes second nature.

![from https://filiphalas.com/from-vscode-to-neovim](https://miro.medium.com/v2/resize:fit:1200/format:webp/0*Mq4AHeJQOd-xdcMq.jpg)

Beyond Speed
---------------------------------------------

Was my primary motivation to be faster? Maybe subconsciously. But honestly, it was more about the “cooler” factor even though nobody care about your editor. And what I discovered was something far more profound than just speed: it was **fun to code** again.

Not every aspects of being a software engineer are enjoyable, but the act of writing code itself should be. With Vim motions, coding transformed into a kind of mini-game. Each text object, each motion, each operator felt like a new move to master. It was like solving a puzzle, optimizing my movements, and building complex actions from simple primitives. This add an enjoyment into my work, making me eager to learn more and less afraid to experiment. It reinforced a powerful lesson: I _can_ learn challenging new things, and the effort pays off.

This newfound enjoyment found when I ventured beyond the VS Code extension and into the world of Neovim. Neovim’s extensibility, particularly its use of Lua for configuration, opened up an entirely new dimension of customization. Diving into my 'init.lua' file, tweaking plugins, and building my ideal editing environment was not just a technical exercise; it was a journey of self-discovery. I learned what truly mattered to _me_ in an editor, how I preferred to organize my workspace, and what shortcuts truly enhanced my workflow. It was another piece of evidence in my pocket that I could take a complex tool, understand its inner workings, and mold it into a personal, enjoyable extension of my thought process.

![from https://www.learntermux.tech/2023/03/vim-text-editor.html](https://miro.medium.com/v2/resize:fit:700/format:webp/1*XmPUj3miIrYYtwJupvGs1A.png)

More to Learn, More to Enjoy
----------------------------

The journey with Vim (and now Neovim) is ongoing. There’s always a new motion to discover, a new plugin to explore, a new way to optimize. But that’s part of the fun. For me, however, the “fun” isn’t about collecting a vast array of plugins. In fact, I’m quite the opposite; I try to use as few plugins as possible, avoiding the overwhelm of configurations I don’t fully understand. My approach is to stick with the core functionality, and only if I encounter a specific problem or friction point do I then seek out a plugin or configuration snippet that precisely addresses that issue, and nothing more.

You start to understand what you want from your tools, and you gain the knowledge and power to get it. In a profession where not every task is glamorous, having a set of tools that you genuinely enjoy using, that you can customize and make your own, makes a world of difference. My Vim-powered workflow isn’t just about efficiency; it’s about reclaiming a little piece of joy in the daily act of creation.

Now I can do “I use Vim, btw.” (And yes, it’s still hard to quit.)`,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*FzAafbTm2QR9L3Nw2yrG6Q.png",
  },
  "7": {
    id: "7",
    title: "What's up with Go Slice?",
    date: "2025-07-15",
    content: `Slices and arrays are indeed powerful and fundamental variable types in Go when it comes to working with collections or “sets” of data. I will discuss their differences later.

Last week, I was continuing to write my Go project and encountered this behavior with Go slices. I have a function that is going to make a simple refresh token. The function generates a cryptographically secure, random refresh token as a hexadecimal string.

\`\`\`go
func MakeRefreshToken() string {
   byte32 := make([]byte, 32)
   rand.Read(byte32)
   encoded := hex.EncodeToString(byte32)
   return encoded
}
\`\`\`

- The first line creates a new byte slice (an array of bytes) named 'byte32'. 'make([]byte, 32)' allocates space for 32 bytes. This means the resulting refresh token will be based on 32 bytes of random data.

- The second line fills 'byte32' with cryptographically secure random bytes.

- The third line converts the raw byte slice ('byte32') into its hexadecimal string representation, then returns it.

Wait… if you notice, we send 'byte32' to 'rand.Read()' not '&byte32', but why in the third line do we expect 'byte32' to contain random bytes?

This is what makes slices different from arrays (specifically in Go). A slice is a reference type, not a value type. They are descriptors that point to an underlying array. When you pass a slice to a function or assign one slice to another, you’re passing a copy of the slice header (which contains a pointer to the underlying array, its length, and its capacity), not a copy of the entire data. This makes them very efficient for large datasets.

If you look at 'src/runtime/slice.gox'.

\`\`\`go
type slice struct {
   array unsafe.Pointer
   len   int
   cap   int
}
\`\`\`

Let’s look at an array example below

\`\`\`go
package main
import "fmt"
func main() {
   alphas := [...]string{"A", "B"} // or [2]string{"A", "B"}
   removeA(alphas)
   fmt.Println(alphas) // [A B]
}
func removeA(alphas [2]string) {
   for index, a := range alphas {
    if a == "A" {
     alphas[index] = ""
    }
   }
}
\`\`\`

You get '[A B]' instead of '[ B]'. However, if you make a "slicely" different declaration by giving 'alphas' an address instead of a value, you will get what you expect:

\`\`\`go
package main
import "fmt"
func main() {
   alphas := [...]string{"A", "B"}
   removeA(&alphas)
   fmt.Println(alphas) // [ B]
}
func removeA(alphas *[2]string) {
   for index, a := range *alphas {
     if a == "A" {
       (*alphas)[index] = ""
    }
  }
}
\`\`\`

In summary:

**Array**

*   **Fixed Size:** An array in Go has a fixed size defined at its declaration.
*   **Contiguous Memory:** Elements in an array are stored contiguously in memory.
*   **Value Type:** Arrays are value types. When you pass an array to a function or assign one array to another, a copy of the entire array is made. This can be a consideration for large arrays.

**Slice**

*   **Dynamic Size (Flexible):** Slices provide a flexible view into an underlying array. You don’t need to specify their size at compile time. They can grow or shrink as needed.
*   **Reference Type (Underlying Array):** Slices are reference types (or more precisely, they are descriptors that point to an underlying array).
*   **Convenient Operations:** Go provides built-in functions and syntax for working with slices that make common data manipulation tasks easy, such as 'append' and the slicing operator ('[low:high]')."

For more information: [https://go.dev/doc/effective_go#slices](https://go.dev/doc/effective_go#slices)`,
  },
  "8": {
    id: "8",
    title: "The Unholy Commandments of the -10x Engineer",
    date: "2025-07-28",
    excerpt:
      "I’m not sure if the 10x Engineer truly exists. I’ve heard they might, perhaps in the digital realm of ‘AIs’ (just kidding… mostly).",
    content: `

![On the way to the gym.](https://miro.medium.com/v2/resize:fit:700/format:webp/1*-L2QbhfsCKysNBZl70IRuQ.jpeg)

Prologue
--------

I’m not sure if the 10x Engineer truly exists. I’ve heard they might, perhaps in the digital realm of ‘AIs’ (just kidding… mostly).

Short but not clear definition of 10x Engineer is a person who achieves ten times the productivity of their peers.

_But what exactly does “productivity” mean ?_

_Is it about raw outputs ? Or outputs that actually matter ?_

_Is it making decision that significantly impact the work (positive impact, of course) ?_

_Solving problem fast and efficient in long run ?_

The direct answer is often seen as the measurement of output over input. For a software engineer, this might infer how efficiently tasks are completed, considering factors like time spent, resource utilization, and quality.

Here are the 10 unholy commandments to becoming a true -10x engineer.
---------------------------------------------------------------------

*   **Embrace communication chaos:** Either flush your team with irrelevant information or go completely silent. Either way, they’ll spend precious hours guessing your next move.
*   **Focus on shiny features not problem solving:** Introduce new problem is a plus. Cultivate an unclear product vision and routinely shift requirements to nullify all prior engineering efforts.
*   **Champion burnout:** Demand constant overtime. Do not embrace feedback. Master the art of blaming others. Burn out is your primary goal.
*   **Master the art of misalignment:** Ensure team goals never align. More blockers mean more ‘critical’ cross-team meetings. A perfect excuse to talk without achieving anything. After all, we’re human, we _need_ to communicate… inefficiently.
*   **Do not learn:** What you know is enough.
*   **Only do low leverage activities:** Dedicate yourself to reactive tasks, endless busywork, and utterly pointless rituals.
*   **Adopt multi-responsibility principle:** Architect tightly coupled codebases that introduce a cascade of side effects. This guarantees endless future development and maintenance, securing your job for eternity.
*   **Keep 10 engineers in a meeting that they don’t actually need to be involve:** Your go-to phrase: ‘We need you here just in case!’”
*   **Worship complexity:** Simplicity is for amateurs. The more complexity your solutions are, the less likely any ‘AI’ will ever replace you.
*   **Master context-switching:** Maximize build times to force engineers into constant context switches. Force engineers to have less focus and switch the context regular. You can achieve similar thing with testing or do both.

Final Advise
------------

If you’ve made it this far, ignore or negate every single piece of advice I’ve offered. Don’t take them serious. Your productivity (and sanity) will thank you.

> PS: This article was initially inspired by [taylor.town’s story](https://taylor.town/-10x)

`,
    image:
      "https://miro.medium.com/v2/resize:fit:500/format:webp/1*-L2QbhfsCKysNBZl70IRuQ.jpeg",
  },
  "9": {
    id: "9",
    title: "Is ‘AI’ Closing or Widening the Developer Gap?",
    date: "2025-08-12",
    excerpt:
      "Recently, I was interviewing a candidate and asked a simple question: “What’s your take on AI?” He said that “AI will close the gap between junior and senior developers.”",
    content: `
> Note: When I talk about AI in this article, I’m mostly referring to “vibe coding” and AI Coding Agents. I’m not talking about AI in general, which is a very broad topic.

![me and ducks](https://miro.medium.com/v2/resize:fit:500/format:webp/1*WGZHUCiI9ql3SoXhgeGI7A.jpeg)

Recently, I was interviewing a candidate and asked a simple question: “What’s your take on AI?” He said that “**_AI will close the gap between junior and senior developers._**”

My first thought was that it would do the opposite that “**_it would make the gap between junior and senior even wider_**_”_. I believe you can’t skip the experience. Software development is about at its core, an exercise in continuous decision-making where the developer must own the consequences of those choices. Senior developers have already learned many lessons and know most of the problems that might happen ahead therefore they can use LLM to be even more efficient, while juniors risk missing out on crucial learning.

So, I disagreed but without much explanation. I thought it was a simple question and I didn’t want to overcomplicate it.

Later, I revisited the question and came up with a better answer. My question was too broad. My short answer is: **it depends on your goals and your starting point.** I’ll explain why in this article.

It is Not Always A Fire and Forget to Get a Good Result
---------------

To build software and make money from it, you have to maintain, scale and keep responding to the Market. There are many small decision along the way that you can't let LLM decide for you. This is very similar to using LLM to create an image but you have to keep improving it until you get the image you want. It’s not a fire and forget process. You have to keep iterating and improving until you get the result you want. The same thing applies to software development. You can use AI to help you get there faster but the you still own the process of adjusting and improving the image until you get the result you want. Same as coding. All I am saying is using LLM still requires skills and experience to get the best result.

I’ve noticed that the people most excited about Coding Agents are often the high level person who haven't done the actual implementation for a long time. They are excited about the potential of AI to automate tasks and increase productivity, but they might not fully understand the implications of relying on AI for coding tasks. (This is just an observation, not a generalization.)

I think there’s a reason for this. With all the hype and advertising, it’s easy to believe that everything will work as expected, regardless of the consequences.

I agree with the excitement, but what about the consequences for a developer?

_The image below refers to when you are using Coding Agents within your area of competence. You know what you are doing._

![1st Illustrate](https://miro.medium.com/v2/resize:fit:1024/format:webp/1*ZUQUZzqVeQCzdYcmNkCxdw.png)

AI might help you reach your goal faster, but will you actually learn anything from it? maybe…

_The image below refers to when you are using Coding Agent out of your area of competence._

![2nd Illustrate](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tnOShzIVZ67jiNZbLzly6Q.png)

My concern from 2nd illustrate is that AI can create a false sense of competence. [The Dunning-Kruger effect](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect) might occur faster, where a developer believes they have the ability to achieve the code they want. But as time goes on, you’re more likely to pile disaster upon disaster until the code is impossible or not worth the effort to fix or maintain.

More over
---------

As I illustrated above, the more competent you are, the better your chances of creating maintainable and scalable software. If you’re at the beginning of your software development career with less experience and knowledge, you’re more likely to fall into the second scenario.

How do we expand our area of competence?
---------------------------------------------------

To do so, you need experience and hard learning. With “vibe coding” alone, I don’t think you’ll gain the most knowledge. This is unless you already have a strong foundation and a very efficient learning method which is very individual. You can use AI to help you learn, but it’s not a substitute for the learning process itself. It’s more of a tool to assist you in that process.

How to Learn
------------

For instance, when I’m learning a new language, I find it’s best to disable all AI code assistants. When you code by yourself, you tend to think and to understand problems more deeply, including edge cases. You build your thoughts upon your thoughts. This is how you truly learn about a problem and increase your chances of inventing good solutions.

Conclusion
----------

I agree that AI helps us learn, be more productive, but letting Coding Agents implement things for you entirely is an different matter. In other words currently it provide less accuracy when it comes to bigger picture. It’s crucial to know your goal before using AI. Otherwise, you might miss the opportunity to learn or have fun coding, both of which affect your long-term improvement. **Use it with care**.

Coding Agents is a very powerful tool for proving an idea, especially if your idea doesn’t require complex prerequisites. It can help you quickly create a Minimum Viable Product (MVP) version of your idea. Increase productivity. Later on, you might throw the entire project away or pick some parts to continue evaluating your idea. This helps you get more and more accurate results toward your goals.

Lastly
------

I’m not against AI. I use it every day. My point is that you need to be more aware of the path you’re on. Everyone can cook, but not everyone can be a chef.

I don’t know… my take might change in the future since AI improves so rapidly each year.
If you have any thoughts, please share them in the comments. oh wait, there is no comment section...
`,
    image:
      "https://miro.medium.com/v2/resize:fit:500/format:webp/1*WGZHUCiI9ql3SoXhgeGI7A.jpeg",
  },
};

export { blogPosts };
export type { BlogPost };
