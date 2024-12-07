# Miniaturized Economies

The world’s smallest economy is apparently Tuvalu, with a GDP of $70 million, about 400,000 times smaller than that of the United States (GDP: $27 trillion). Tuvalu’s population is under 12,000, smaller than towns in normal-sized countries. This factoid makes me do a double-take similar to the one I did when I learned that more people speak Klingon than Esperanto. I know at least a few people with annual incomes higher than $70m (net worth is an inappropriate comparison for GDP). If acquisition were a meaningful route to starting your own nation and/or state, many people could pull it off. It isn’t, but the comparison of large individual incomes and small national GDPs is interesting nevertheless.

The calibration got me thinking: how small could an economy get in GDP terms? Can it get small enough to compare to middle-class developed economy incomes? Can you have a meaningful economy with a $100,000 GDP? How about $100? $10?

How about $1?

I’m going to argue that with the right design and in the right context, economies can, in fact, be shrunk to $1 scale. Forget nation-states or city-states. You can miniaturize economies enough to put them into small boxes. And there are good reasons to build such miniaturized economies which I’ll get to.

In fact here’s a picture of such an economy in its early stages. Not the humans in the picture. The two rovers.

![caption...](https://via.placeholder.com/150)

This is me and my buddy Anuraj with two rovers from the Yak Rover project (our little robotics gang has 4-5 regulars, and you can join us at our weekly meetings if you’re interested). At Devcon a couple of weeks ago, we demonstrated a very simple mechanism built by Anuraj: Paying 1 USDC (an Ethereum-based stablecoin worth $1) to control one of the two rovers for 2 minutes, via the Farcaster social network’s Frames mechanism (which embeds little app UIs directly into the feed, and handles things like authentication and various transaction and session-management details).

Now at first blush this might seem like a simple remote-control-over-networks experiment of the sort that could have been done anytime in the last 20 years. In fact, Maier, one of our other team members, did something like this on Twitter a few years ago with the previous generation of our rovers (our project is almost 4 years old).

But this is more than mere control over networks. There’s something genuinely new here. Something that makes this a first step towards a $1 GDP miniaturized economy.

The short version: there’s no reason for the “$1 for 2 minutes” external transaction to map internally to things we normally calibrate at that scale, like say a snack or drink from a vending machine, or an old-fashioned phone call from a payphone, or a session with an old-fashioned arcade video-game.

You could, for instance, map it to a million transactions of 1/10,000 of a cent, happening at a rate of 16000/s. No human transactions happen that fast, but electronics and computation transactions usually do. In 2 minutes, as we discovered, a typical person can issue maybe a couple of dozen commands to a rover like “forward” or “turn.” But there’s no reason the rovers have to be controlled with such a rigid command vocabulary, at a rate limited by a human’s control ability (this is a centrally planned “command economy” robot control model).

You could issue vague commands, interpreted by an LLM and translated into thousands of micro-commands to motors, like “dance like a ballet dancer.”

You could directly issue macro commands like “blink your LED 100 times rapidly.”

You could issue commands to both rovers at once, like “hold a conversation in Morse code with the other rover using blinking LEDs, at the fastest rate readable with your camera.”

You could design an entire low-level instruction set and price it in ten-thousands of a cent per invocation.

You could have a thousand people pay $1 each to a swarm of a 100 robots to put on a performance shaped by a mood requested by each of the thousand people.

Your control would go from deterministic and planned to stochastic and not entirely within your control, but it would get more creative and surprising in the process. You might get more creativity in the response than there is in your commands. You could argue you don’t need an internal economy to generate such creative complexity, and that’s possibly true, but I’d argue that building an internal economy is one of the most efficient ways to engineer creative complexity into an artifact without requiring an unsustainable increase in command intelligence.

In general terms, how much informational complexity gets tied to the spending of your $1 is only limited by how clever and capable the internal “economic” architecture of the rover is. Not by what $1 means to humans.

The point is, our intuitions about money and transactions are linked to human scales and speeds. They don’t have to be. The key to miniaturizing economies lies in decoupling economic activities from human scales.

Think about it this way. “GDP” is a general measure of economic activity over a period of time (a year), and what makes it general is that it aggregates a lot of volume, velocity, and variety of transactions. That’s a phrase that was once used to describe Big Data, but let’s appropriate it here to describe economies.

Economies have a large volume of transactions in a period of accounting time. A million is a reasonable lower bar. No individual human makes that many transactions directly in a year.

Economies have a high velocity of transactions. Many/second is a reasonable threshold. A million transactions in a year is about 2/minute. No individual human shops at that speed.

Economies have a high variety of transactions. Individual humans and even large corporations buy and sell a narrow range of things. But an economy transacts vastly more types of things.

But as far as I can see, there is no necessary scale here. There’s no obvious reason why you need 70m dollars beyond the fact that traditional financial technologies can’t easily subdivide monetary instruments very finely. And there’s no reason the accounting period has to be a year. If things move fast enough, why can’t the accounting period be 2 minutes? Again, there’s no reason other than that traditional financial technologies can’t move that fast or settle accounts that frequently.

This insight, that scale has no necessary relationship to “economic” character, was partly sparked by a little note I saw in an exhibition of glass sculptures by Federica Marangoni in Murano (near Venice) last week. The relevant bit reads: “…monumentality is not a matter of scale, but of proportions.”

That’s exactly the point with economies. Things are “economies” when elements have certain proportions to them. Not when those elements combine at particular scales.

Here’s one of the “small but monumental” sculptures in the exhibition.

![caption...](https://via.placeholder.com/150)

I think miniaturizing economies is a similar creative task. To preserve the proportions of monumental transaction-flow hyperobjects at smaller scales.

Traditional economic technologies can’t maintain those proportions below certain scales, but cryptocurrencies can. It is not hard to imagine that 1 USDC earned from an “external” trade could then underwrite a million or even a billion transactions within 2 minutes, within the high-speed internal network of a small device — like a rover or a globally dispersed group of rovers on a VPN (an architecture we’re currently exploring).

This would of course be a fun stunt to pull off, but there’s a more serious idea here. In general, “economy” (or more narrowly, “market”) is the only general problem solving mechanism we know of that works beyond a certain threshold of complexity. Anything that has more than a certain “volume, velocity, and variety” or informational throughput going on needs an economy to run it. Big Data calls for economic modes of organizing, and we can now pack a lot of Big Data into very small spaces, thanks to cryptocurrencies.

This idea puts a very different spin on the meaning of the 1 USDC external transaction. Rather than viewing it as a microeconomic transaction, like paying $1 to buy a candy bar, you should view it as a macroeconomic transaction, like buying a Treasury bond.

Now this gets interesting. When you buy the bond of a sovereign nation, or a municipal bond issued by a city, you’re investing very generally in an economy, and usually over a relatively long period (years to decades). You’re not buying apples to eat over hours to days. Even when the bond issue is specific (like say a municipal bond to fund a bridge), you’re not buying the specific thing being paid for (a piece of the bridge) to consume. You’re buying a promise of increased productive potential of the economy it is part of, over a longish horizon. The investment is general, and so is the expectation of returns.

But again, there’s no reason for any of this to be tied to specific scales. “Long-term” in human terms is typically a year or more, where our intuitions for decision-making get bad. But that's more because complexity in human affairs tends to compound to intractability within about year. In a miniaturized economy, things can compound to intractability much faster. “Long-term” can be 30 seconds if a robot is figuring out thousands of micro-actions/second.

We don’t normally invest this way in very small “economic masses.” Most small economic masses are internally too coarse to sustain the volume, velocity, and variety required for the generality that distinguishes a macroeconomy from a narrow microeconomic activity. The potential for high informational throughput isn’t there.

The one exception is human beings. When you tip a waiter for example, you’re sort of generally investing in the future well-being of the individual, and in the culture of service relationships generally (even if you don’t personally ever eat at that restaurant again). A tip, I’d argue, is closer to a bond purchase than a transaction. And this is because the “internal economy” of a human life does in fact have the volume, velocity, and variety characteristic of a full-blown economy. We can’t easily peer into the details the way we could with the low-level details of an electronic gadget, but it’s the same principle. We base our investments on aggregate emergent signals like smiles, a sense of “trust,” and so on, even if we can’t see individual neurons firing at a rate of hertz.

There’s another obvious angle here. When you miniaturize an economy financially, you’re also doing something like creating a distilled, compacted intelligence. It is now a commonplace observation that the “economy” might be a general intelligence; an AI made up of moving financial tokens. But there’s something unsatisfying about viewing a large nation-sized economy as an AI.

But once you start miniaturizing an economy in space and time, the game changes. It starts to look more and more like an intelligence. It’s thinking fast, in a small space, and on a small energy budget. Enough Big Data packed into a small enough space/time/energy box gives you an intelligence. And even the most powerful intelligence, if diffused too much in spacetime, and requiring too much energy, starts to look kinda dumb.

When sufficiently compacted, the volume, velocity, and variety that constitutes an “economy” of tiny transactions also constitutes something equivalent to neurons firing or matrices multiplying and producing “intelligence.”

Miniaturizing economies in space-time is, arguably, a pathway to creating intelligence. This might be why miniaturizing is generally viewed as a productive engineering activity. Almost anything gets more intelligent if you compress the same amount of functional capacity in a smaller space-time-energy package.

To bring the discussion back to nations and states, I think the capability to miniaturize complex, full-dimensional economies arbitrarily is going to be critical to making ongoing experiments in popup cities and virtual nations more real. I suspect lack of such capabilities is one reason the joke micronations of the 20th century were jokes. They usually larped the cosmetic features of statehood, like having flags and “big state” currencies, but didn’t have the potential for internal economic complexity at their too-small scale.

But we have that capability now. There’s no economic reason tiny nations have to be big jokes. There may be limits to how small economies involving humans can get, but they are probably far lower than we think. And there may be other conditions required besides creating miniaturized economies, but hey, at least one important condition seems realizable now.

And along another dimension, there’s no reason only nations should get to have economies in their innards. We ought to be able to put economies anywhere we can fit a decently powerful computer, and the problem-solving pattern that is an economy is useful.
