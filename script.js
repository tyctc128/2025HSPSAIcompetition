document.addEventListener('DOMContentLoaded', function() {
    // 專案資料
    const projectData = [
        {
            id: 1,
            title: "AI 笑話大師",
            description: "這位「AI 達哥」專門講鴨子冷笑話，還能自我審查，不講關於性、歧視或政治等敏感話題的笑話。設計理念強調娛樂與安全並重，是兼具幽默與道德判斷的智慧笑話機器人，讓大家笑得安心又開心！",
            videoUrl: "https://www.youtube.com/embed/0Uw7zRvCizQ"
        },
        {
            id: 2,
            title: "你爸回來啦~~",
            description: "小孩偷玩電動最怕爸爸突然回來！這個超實用的裝置利用AI臉部辨識，一旦偵測到爸爸的臉出現在門口，立刻啟動LED燈提醒，還會播放「爸 爸 回 來 了」的語音警告。讓孩子有時間秒切畫面，完美防禦突襲檢查，是遊戲黨的救命神器！",
            videoUrl: "https://www.youtube.com/embed/NZpIN8XIsTc"
        },
        {
            id: 3,
            title: "動一動吃更爽",
            description: "想吃零食先動起來！這款減肥神器透過姿勢辨識計算你的開合跳次數，達標才自動解鎖零食箱。讓你邊運動邊享受獎勵，減肥過程充滿動力與樂趣，真正達成「動一動，吃更爽」的健康生活新方式！",
            videoUrl: "https://www.youtube.com/embed/aMF-Z3Zh1cA"
        },
        {
            id: 4,
            title: "寵物自動餵食機",
            description: "不論是貓還是狗，都能被智慧餵食！這台自動餵食機能辨識寵物種類，依照設定時間與份量自動給予飼料。使用伺服馬達精準控制，免除你忘記餵食的煩惱，打造最貼心的毛小孩生活管家！",
            videoUrl: "https://www.youtube.com/embed/gZL6ISNP6Ag"
        },
        {
            id: 5,
            title: "幫上班族找房子",
            description: "還在煩惱租屋難？這個互動網站利用偵測技術詢問你的需求，並帶你點選合適網址查看房源，省下大把搜尋時間。上班族必備的租屋神器，快速、省力又直覺，是懶人找房的智慧新選擇！",
            videoUrl: "https://www.youtube.com/embed/HZeYYwtoSrU"
        },
        {
            id: 6,
            title: "心情轉換機",
            description: "說出你的心情，影片來幫你轉換情緒！心情轉換機能聽懂你說「我好開心」等語句後，自動播放各種有趣或搞怪的影片，讓生活多一點驚喜。是療癒壓力、分享快樂的好幫手！",
            videoUrl: "https://www.youtube.com/embed/aRzKTScru0g"
        },
        {
            id: 7,
            title: "心情點播機",
            description: "想聽歌但選不出來？心情點播機幫你決定！根據語音判斷你的情緒，自動播放對應曲風的音樂影片，讓你隨時有情緒出口。一台懂你的「音樂知己」，陪你歡笑、療傷、放鬆。",
            videoUrl: "https://www.youtube.com/embed/GcKMPdY-vro"
        },
        {
            id: 8,
            title: "自動回收分類機",
            description: "分類不再困難！這台自動回收機透過鏡頭辨識寶特瓶、紙類等回收物，讓分類過程全自動。搭配伺服馬達轉向不同分類區，省時又環保，是打造智慧家庭與綠色校園的絕佳利器。",
            videoUrl: "https://www.youtube.com/embed/-jye8fhcvPg"
        },
        {
            id: 9,
            title: "自動餵食機",
            description: "用紙箱與電路板DIY餵食神器！這款自動餵食機操作簡單，價格親民，只需幾樣材料就能完成。還能偵測寵物靠近，自動下飼料。讓你動手做出專屬的寵物照護好幫手，創意又實用！",
            videoUrl: "https://www.youtube.com/embed/lDX52awWsFQ"
        },
        {
            id: 10,
            title: "語音玩遊戲",
            description: "不讓任何人被遊戲世界拒於門外。這款貼心設計讓行動不便或手部不方便的身心障礙者也能開心玩遊戲，只需說出「前進」、「左轉」等簡單指令，即可控制角色移動。透過科技實現無障礙娛樂，讓更多人感受到遊戲的快樂與尊重，科技真正為人而生。",
            videoUrl: "https://www.youtube.com/embed/KDk-lv-tFK4"
        },
        {
            id: 11,
            title: "開合跳看影片",
            description: "懶得動就沒得看！這個創意專案要求你完成指定次數的開合跳才能觀看影片，將娛樂與運動結合，鼓勵健康生活。不僅適合居家運動挑戰，也是一種有趣的獎勵機制！",
            videoUrl: "https://www.youtube.com/embed/sCBAOs0MSpw"
        }
    ];

    // 獲取DOM元素
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const videoIframe = document.querySelector('.video-container iframe');

    // 為每個專案卡片添加點擊事件
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            const project = projectData.find(p => p.id === projectId);
            
            if (project) {
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                videoIframe.src = project.videoUrl;
                modal.style.display = 'block';
                
                // 添加動畫效果
                modal.classList.add('active');
                
                // 禁止背景滾動
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // 關閉模態視窗
    closeButton.addEventListener('click', closeModal);
    
    // 點擊模態視窗外部也可關閉
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // 按ESC鍵關閉模態視窗
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // 關閉模態視窗函數
    function closeModal() {
        modal.style.display = 'none';
        videoIframe.src = '';
        document.body.style.overflow = 'auto';
    }

    // 添加滾動動畫效果
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // 觀察所有專案卡片
    projectCards.forEach(card => {
        observer.observe(card);
        // 添加初始隱藏類
        card.classList.add('fade-in-initial');
    });

    // 添加CSS動畫類別
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-initial {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
