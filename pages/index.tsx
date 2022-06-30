import Head from 'next/head';
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
	const { data, error } = useSWR(
		"https://api.github.com/users/HRTK92",
		fetcher
	);
	return (
		<>
			<Head>
				<title>HRTK92</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
				<div className="px-6">
					<div className="flex flex-wrap justify-center">
						<div className="w-full flex justify-center">
							<div className="relative">
								<img
									src="https://avatars.githubusercontent.com/u/70054655?v=4"
									className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
								/>
							</div>
						</div>
						<div className="w-full text-center mt-20">
							{data ? (
								<div className="flex justify-center lg:pt-4 pt-8 pb-0">
									<div className="p-3 text-center">
										<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
											{data.public_repos}
										</span>
										<span className="text-sm text-slate-400">Public Repos</span>
									</div>
										<div className="p-3 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
												{data.followers}
											</span>
											<span className="text-sm text-slate-400">Followers</span>
										</div>

										<div className="p-3 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
												{data.following}
											</span>
											<span className="text-sm text-slate-400">Following</span>
										</div>
									</div>) : null}
								</div>
					</div>
						<div className="text-center mt-2">
							<h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
								HRTK92
							</h3>
							<div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
								<i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
								🇯🇵Japan
							</div>
						</div>
						<div className="mt-6 py-6 border-t border-slate-200 text-center">
							<div className="flex flex-wrap justify-center">
								<div className="w-full px-4">
									<p className="font-light leading-relaxed text-slate-600 mb-4">
										{data ? data.bio : null}
									</p>
									<a
										href="https://github.com/HRTK92"
										className="font-normal text-slate-700 hover:text-slate-400">
										Follow Account
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
			);
}
