const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: true,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.05,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'Locked Away',
            artist: 'OutaMatic',
            url: 'https://sharefs.yun.kugou.com/202006161118/9134e77ddf8f9f7c34bcd97d150b2e2b/G056/M02/1C/10/2IYBAFbhdTOAHWpUAD-cQD7kiQs020.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000138376764-zvin0u-t500x500.jpg',
            lrc: '/./dist/music/lrc/Locked Away-OutaMatic,Maddie Wilson,Madilyn Paige.lrc',
            theme: '#46718b'
			
        },
        {
            name: 'N.R.G',
            artist: 'OutaMatic',
            url: 'http://music.163.com/song/media/outer/url?id=412903001.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000161722669-m2fyg7-t500x500.jpg',
			lrc: '/./dist/music/lrc/N.R.G (feat. F R A N C I S)-OutaMatic.lrc',
            theme: '#46718b'
			
        },
		{
            name: '香りのやる気スイッチ!',
            artist: 'Foxtail-Grass Studio',
            url: 'https://sharefs.yun.kugou.com/202006161118/3fcc39066aedec08c01b87b08532008e/G084/M07/0F/0D/9IYBAFh29L6AZLHoACwGM9GDnGY051.mp3',
            cover: 'https://i0.hdslb.com/bfs/archive/67b7ef243c0129449b7c820fad589e3d8b4d5546.jpg',
			lrc: '/./dist/music/lrc/香りのやる気スイッチ!-Foxtail-Grass Studio.lrc',
            theme: '#46718b'
			
        },
		{
            name: 'One More Time',
            artist: 'Ellis',
            url: 'https://sharefs.yun.kugou.com/202006161118/ba2bc2adde48d4043ce05e0e11616d29/G143/M01/11/09/b5QEAFvTxb-AeK6YAC9551ETmSo145.mp3',
            cover: 'https://i.scdn.co/image/ab67616d00001e02040dc759085939bae81d6d0f',
            lrc: '/./dist/music/lrc/One More Time-Ellis.lrc',
	    theme: '#46718b'
        },
		{
            name: '世界は恋に落ちている',
            artist: 'CHiCO with HoneyWorks',
            url: 'https://sharefs.yun.kugou.com/202006161119/a60649b693255bf5769f0f41aacc1e90/G196/M05/04/17/ZIcBAF5iT-mAIMEjAExk7Rq79zQ485.mp3',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/61Ag0oTTbcL._AC_.jpg',
            lrc: '/./dist/music/lrc/世界は恋に落ちている-CHiCO with HoneyWorks.lrc',
	    theme: '#46718b'
        },
		{
            name: 'Only Now(feat. Tyler Graves)',
            artist: 'Seven Lions,Tyler Graves',
            url: 'https://sharefs.yun.kugou.com/202006161119/c644e5a226e7e8814f442c9bb7c93fde/G206/M0B/02/04/rpQEAF5PHCGAIqG0ADOTbz9JFgM571.mp3',
            cover: 'https://m.media-amazon.com/images/I/61o7NG2PFaL._SS500_.jpg',
	        lrc: '/./dist/music/lrc/Only Now(feat. Tyler Graves)-Seven Lions,Tyler Graves.lrc',
            theme: '#46718b'
        }
    ]
});

