var config = {
    style: 'mapbox://styles/grafa/ckdhx8rpo01b61ip8o9e8fth3',
    accessToken: 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2tkb3ZoNzZrMDZyMzMxbGo0YTF3ZHk2ZyJ9.u6m6_Sxxu5ITBuomsTyA3g',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Fave SUP spots in the PNW',
    subtitle: 'A biased opinion of great places to paddle',
    byline: 'by Rafa Gutierrez',
    footer: 'Source: Rafa Gutierrez',
    chapters: [
        {
            id: 'id-ri',
            title: 'Ross Island',
            image: './images/spots/ross-island.jpg',
            staticMap: true,
            description: 'If you\'re in Portland proper, then Ross Island is a must-visit. Getting to Ross Island is pretty straightforward and very accessible from either Willamette Park or Sellwood riverfront Park. There\'s lots of beach along Sellwood that you can hug for a while and if you\'re adventurous you can make it to the southern tip of Ross Island. Experienced paddlers will loop around the island for the 6 to 7 km trip or just hang out in the lagoon. This area gets really busy in the summer and lots of boats and jet skis will pass by. Be sure to stay out of the middle of the river and closer to shore (but watch out for remnant pilings as they will catch your fin and you\'ll be taking a dip).',
            location: {
                center: [ -122.66577,45.47073],
                zoom: 13.18,
                pitch: 60.00,
                bearing: -41.60
        },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'id-merwin',
            title: 'Merwin Lake (Yale Bridge)',
            image: './images/spots/merwin.jpg',
            staticMap: true,
            description: 'Merwin is fave spot of mine. Just one hour away from Portland, you\'ll find yourself in a lush PNW forest, replete with fuzzy ferns and forest fairies. The parking is sparse at Yale Bridge so get there early. The staircase down to the launch is long and steep, guaranteed to scuff your board. But once you\'re in, it\'s a smooth ride to the pictureesque cascades awaiting your IG stories. And there\'s a rope swing under the bridge for the swinger in you.',
            location: {
                center: [-122.36976,45.95861],
                zoom: 13,
                pitch: 0.00,
                bearing: 0.00
        },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'id-estacada',
            title: 'Estacada Lake',
            image: './images/spots/estacada-lake.jpg',
            staticMap: true,
            description: 'Also within the 1 hour radius of Portland is Estacada Lake (aka Timber Park, Milo McIver SP). Estacada is approachable from either Milo or Timber Park. Just depends on if you want to pay the park fee. Timber Park has rentals from <a href="https://clackamasriveroutfitters.com/paddle-board-kayak-rentals/">Clackamas River Outfitters</a>. Estacada is also quite beautiful like Merwin with steep cliffs and a few cascades along the way. ',
            location: {
                center: [-122.34706,45.29564],
                zoom: 12.92,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'id-narrows',
            title: 'Willamette Narrows',
            image: './images/spots/narrows.jpg',
            staticMap: true,
            description: 'Ready to step it up?',
            location: {
                center: [-122.64920, 45.33594],
                zoom: 12.94,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
