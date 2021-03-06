export interface Profile {
	user_id: string;
	username: string;
	join_date: string;
	count300: string;
	count100: string;
	count50: string;
	playcount: string;
	ranked_score: string;
	total_score: string;
	pp_rank: string;
	level: string;
	pp_raw: string;
	accuracy: string;
	count_rank_ss: string;
	count_rank_ssh: string;
	count_rank_s: string;
	count_rank_sh: string;
	count_rank_a: string;
	country: string;
	total_seconds_played: string;
	pp_country_rank: string;
	events: [];
	mode: {
		name: "osu!";
		emojiname: "osu";
		emoji: "986588017521197126";
	};
	graph: {
		title: string;
		buffer: Buffer;
	};
}

export interface UserBest {
	pp: Array<number>;
	rank: Array<string>;
	counts: {
		"100": Array<number>;
		"50": Array<number>;
		miss: Array<number>;
	};
	accuracy: Array<number>;
}
