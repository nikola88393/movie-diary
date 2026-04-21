import { Link } from '@tanstack/react-router'
import GridMotion from './GridMotion'
import { Button } from './ui/button'

const items = [
	'https://image.tmdb.org/t/p/w500/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
	'https://image.tmdb.org/t/p/w500/tSPT36ZKlP2WVHJLM4cQPLSzv3b.jpg',
	'https://image.tmdb.org/t/p/w500/kGzFbGhp99zva6oZODW5atUtnqi.jpg',
	'https://image.tmdb.org/t/p/w500/zb6fM1CX41D9rF9hdgclu0peUmy.jpg',
	'https://image.tmdb.org/t/p/w500/w4bTBXcqXc2TUyS5Fc4h67uWbPn.jpg',
	'https://image.tmdb.org/t/p/w500/dyJvKsNs2KP8qQnAXbRwDjblViy.jpg',
	'https://image.tmdb.org/t/p/w500/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg',
	'https://image.tmdb.org/t/p/w500/6N5d02quKqMKqvTpOdFmBDy9scY.jpg',
	'https://image.tmdb.org/t/p/w500/b6HWTOxn1xevvyHU2K9ICvaRU6g.jpg',
	'https://image.tmdb.org/t/p/w500/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
	'https://image.tmdb.org/t/p/w500/xyWKrni8WrYzqn7ztvI5nIY0h62.jpg',
	'https://image.tmdb.org/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
	'https://image.tmdb.org/t/p/w500/8x9iKH8kWA0zdkgNdpAew7OstYe.jpg',
	'https://image.tmdb.org/t/p/w500/2ssWTSVklAEc98frZUQhgtGHx7s.jpg',
	'https://image.tmdb.org/t/p/w500/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg',
	'https://image.tmdb.org/t/p/w500/67HggiWaP9ZLv5sPYmyRV37yAJM.jpg',
	'https://image.tmdb.org/t/p/w500/gILte6Zd7m1YneIr6MVhh30S9pr.jpg',
	'https://image.tmdb.org/t/p/w500/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg',
	'https://image.tmdb.org/t/p/w500/aHaqZpOL7UyVu0nKqp3SMz0o2E1.jpg',
    'https://image.tmdb.org/t/p/w500/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
	'https://image.tmdb.org/t/p/w500/tSPT36ZKlP2WVHJLM4cQPLSzv3b.jpg',
	'https://image.tmdb.org/t/p/w500/kGzFbGhp99zva6oZODW5atUtnqi.jpg',
	'https://image.tmdb.org/t/p/w500/zb6fM1CX41D9rF9hdgclu0peUmy.jpg',
	'https://image.tmdb.org/t/p/w500/w4bTBXcqXc2TUyS5Fc4h67uWbPn.jpg',
	'https://image.tmdb.org/t/p/w500/dyJvKsNs2KP8qQnAXbRwDjblViy.jpg',
	'https://image.tmdb.org/t/p/w500/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg',
	'https://image.tmdb.org/t/p/w500/6N5d02quKqMKqvTpOdFmBDy9scY.jpg',
	'https://image.tmdb.org/t/p/w500/b6HWTOxn1xevvyHU2K9ICvaRU6g.jpg',
	'https://image.tmdb.org/t/p/w500/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
	'https://image.tmdb.org/t/p/w500/xyWKrni8WrYzqn7ztvI5nIY0h62.jpg',
	'https://image.tmdb.org/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
	'https://image.tmdb.org/t/p/w500/8x9iKH8kWA0zdkgNdpAew7OstYe.jpg',
	'https://image.tmdb.org/t/p/w500/2ssWTSVklAEc98frZUQhgtGHx7s.jpg',
	'https://image.tmdb.org/t/p/w500/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg',
	'https://image.tmdb.org/t/p/w500/67HggiWaP9ZLv5sPYmyRV37yAJM.jpg',
	'https://image.tmdb.org/t/p/w500/gILte6Zd7m1YneIr6MVhh30S9pr.jpg',
	'https://image.tmdb.org/t/p/w500/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg',
	'https://image.tmdb.org/t/p/w500/aHaqZpOL7UyVu0nKqp3SMz0o2E1.jpg',
]

export default function Hero() {
	return (
		<section className="w-full h-dvh">
			<div className="relative isolate overflow-hidden shadow-[0_22px_54px_rgba(20,56,63,0.22)]">
				<div className="pointer-events-none absolute inset-0 z-0">
					<GridMotion items={items} gradientColor="rgba(10, 24, 28, 0.9)" />
				</div>

				<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/46 via-black/54 to-black/72" />

				<div className="relative z-20 flex min-h-screen items-center justify-center px-6 py-14 text-center sm:min-h-[100vh] sm:px-10">
					<div className="max-w-3xl">
						<p className="mb-4 text-xs font-semibold tracking-[0.24em] text-[color:var(--lagoon)] uppercase sm:text-sm">
							Find Your Next Favorite Movie
						</p>

						<h1 className="display-title text-4xl leading-[0.98] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
							Discover stories worth your time
						</h1>

						<p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-lg">
							Personalized picks, surprise recommendations, and a watchlist you
							can keep coming back to.
						</p>

						<div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
							<Button asChild size="lg" className="rounded-full px-8">
								<Link to="/sign-up">Start Exploring</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-full border-white/50 bg-white/12 px-8 text-white hover:bg-white/22 hover:text-white"
							>
								<Link to="/about">Learn More</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
