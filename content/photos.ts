/* The photo essay: photos from the team's Drive folder (pol 268 pictures), taken while reporting the main story.
   `thumb` is a small copy for grids; `w`/`h` are the displayed size so the page doesn't jump while loading. */
export type GalleryPhoto = { src: string; thumb: string; alt: string; w: number; h: number };

const g = (n: string, alt: string, w = 1200, h = 1600): GalleryPhoto => ({ src: `/images/gallery/${n}.jpg`, thumb: `/images/gallery/thumbs/${n}.jpg`, alt, w, h });
const m = (name: string, alt: string, w = 1200, h = 1600): GalleryPhoto => ({ src: `/images/${name}.jpg`, thumb: `/images/thumbs/${name}.jpg`, alt, w, h });

export const photoEssay = {
  title: "Lahore's Third Spaces",
  dek: "Where the city sits, studies, orders another round and stays until closing. Photographs from the reporting of this issue's main story.",
  credit: "Photos: media team",
  photos: [
    m("artisan-coffee", "Armchairs under a blue neon sign at the foot of a staircase in Artisan Coffee"),
    m("coffee-bar", "A pour-over coffee bar against a white brick wall lined with coffee bags"),
    g("09", "An outdoor café courtyard with wooden tables, chairs and umbrellas"),
    g("11", "A café counter stacked with cups, with instant photos pinned along the front"),
    g("23", "Students sitting on the floor by a tall café window at dusk"),
    g("17", "Two visitors adding sticky notes to a wall beneath a neon sign reading Bunker Discussion Forum", 1157, 1600),
    g("03", "Colourful abstract portraits displayed on easels against a black wall"),
    g("04", "A visitor writing on a white wall already covered in messages"),
    m("cafe-table", "A café table from above: iced coffees, toasted sandwiches, sunglasses and a purse"),
    g("05", "Iced drinks and sheets of stickers spread across a table near the counter"),
    g("19", "A decorated green cup beside lip gloss and sheets of gem stickers", 1066, 1600),
    g("10", "Two iced coffees under string lights beside a vase of baby's breath", 900, 1600),
    g("25", "An iced coffee resting on a menu card next to baby's breath"),
    g("26", "A chalkboard on the counter: Coffee is the most important meal of the day", 900, 1600),
    g("22", "Black coffee in a dark mug beside a tissue box and a vase of flowers", 1203, 1600),
    g("08", "Two iced matcha drinks on a dark marble table by the entrance", 900, 1600),
    g("20", "An iced matcha and a latte beside an open laptop", 900, 1600),
    g("01", "A hot drink in a green paper cup and an iced americano on a window table", 900, 1600),
    g("12", "A corner of a café crowded with flowers, framed pictures and a pink shelf; a visitor takes a mirror photo"),
    g("16", "A small painted canvas held up in front of a large, colourful painting"),
    g("07", "The glass front of a café, its logo on the door", 900, 1600),
    g("30", "Iced drinks and a slice of banana bread under warm light"),
    m("brown-cafe", "A warmly lit café corner with a chalkboard menu, a pink shelf of coffee bags and a wall of sticky notes"),
  ],
};
