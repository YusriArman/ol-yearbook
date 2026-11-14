import type { Department, Member } from './types'

// Executive Committee. `message` is the note shown when a card is hovered or focused.
export const exco: Member[] = [
  {
    "name": "Yusri Tan",
    "role": "President",
    "image": "/images/members/yusri-tan.jpg",
    "message": "Leads with heart, clarity, and quiet strength for every OL."
  },
  {
    "name": "Phoon Yuk Guan",
    "role": "Vice President",
    "image": "/images/members/phoon-yuk-guan.jpg",
    "message": "The creative backbone of our term, always turning ideas into reality."
  },
  {
    "name": "Vivienne Siew-Ruo Qing",
    "role": "Secretary",
    "image": "/images/members/vivienne-siew-ruo-qing.jpg",
    "message": "Keeps us grounded and organised so the team can shine."
  },
  {
    "name": "Lai Weng Kit",
    "role": "Treasurer",
    "image": "/images/members/lai-weng-kit.jpg",
    "message": "The numbers wizard who makes every dream plan possible."
  }
]

// Board of Directors, grouped by department.
export const bod: Department[] = [
  {
    "name": "Members’ Development",
    "members": [
      {
        "name": "Syarifah Syaza",
        "role": "Director",
        "image": "/images/members/syarifah-syazahanaa.jpg",
        "message": "Nurtures OLs with patience, warmth, and a strong growth mindset."
      },
      {
        "name": "Ivan Joshua George",
        "role": "Assistant Director",
        "image": "/images/members/ivan-joshua-george.jpg",
        "message": "Always checking in, always cheering others on behind the scenes."
      }
    ]
  },
  {
    "name": "Sponsorship Department",
    "members": [
      {
        "name": "Lim Yan Jun (Lucas)",
        "role": "Director",
        "image": "/images/members/lim-yan-jun.jpg",
        "message": "Bridges partners and OLs to bring bigger opportunities to the family."
      },
      {
        "name": "Chee Xin Yi",
        "role": "Assistant Director",
        "image": "/images/members/chee-xin-yi.jpg",
        "message": "Detail-oriented and reliable, turning sponsorship decks into wins."
      },
      {
        "name": "Khoo Jia Yi",
        "role": "Assistant Director",
        "image": "/images/members/khoo-jia-yi.jpg",
        "message": "Brings fresh ideas and energy into every collaboration."
      }
    ]
  },
  {
    "name": "Public Relations",
    "members": [
      {
        "name": "Nurul Natasya Binti Ramli",
        "role": "Director",
        "image": "/images/members/nurul-natasya.jpg",
        "message": "Tells the OL story with sincerity, creativity, and heart."
      },
      {
        "name": "Kong Yen Ee",
        "role": "Assistant Director",
        "image": "/images/members/kong-yen-ee.jpg",
        "message": "Ensures our messages reach people in the most authentic way."
      }
    ]
  },
  {
    "name": "Resource Management",
    "members": [
      {
        "name": "Ho Jia Rou",
        "role": "Director",
        "image": "/images/members/ho-jia-rou.jpg",
        "message": "The guardian of our resources, making sure nothing goes to waste."
      },
      {
        "name": "Mok Tien Yuen (Thomas)",
        "role": "Assistant Director",
        "image": "/images/members/mok-tien-yuen.jpg",
        "message": "Ready to troubleshoot, fix, and support whenever the team needs."
      }
    ]
  }
]

// Shown on every senior and apprentice card when hovered or focused.
export const sharedThankYou = 'Thank you for leading, loving, and serving with us.'

// Senior Members, alphabetical.
export const seniors: Member[] = [
  {
    "name": "Abirah Yasmin",
    "image": "/images/members/abirah-yasmin.jpg"
  },
  {
    "name": "Ameer Shahril",
    "image": "/images/members/ameer-shahril.jpg"
  },
  {
    "name": "Anandleen Kaur",
    "image": "/images/members/anandleen-kaur.jpg"
  },
  {
    "name": "Angel Tan",
    "image": "/images/members/angel-tan.jpg"
  },
  {
    "name": "Chan Cheok Hua",
    "image": "/images/members/chan-cheok-hua.jpg"
  },
  {
    "name": "Charista Elliani",
    "image": "/images/members/charista-elliani.jpg"
  },
  {
    "name": "Chern Qiao Le",
    "image": "/images/members/chern-qiao-le.jpg"
  },
  {
    "name": "Chin Li Yuan",
    "image": "/images/members/chin-li-yuan.jpg"
  },
  {
    "name": "Chin Yun Xien",
    "image": "/images/members/chin-yun-xien.jpg"
  },
  {
    "name": "Choong Zi En (Dena)",
    "image": "/images/members/choong-zi-en-dena.jpg"
  },
  {
    "name": "Cindy Cornelia",
    "image": "/images/members/cindy-cornelia.jpg"
  },
  {
    "name": "Elisha Paulraj",
    "image": "/images/members/elisha-paulraj.jpg"
  },
  {
    "name": "Eng Xin Yu",
    "image": "/images/members/eng-xin-yu.jpg"
  },
  {
    "name": "Eugenie Ngu",
    "image": "/images/members/eugenie-ngu.jpg"
  },
  {
    "name": "Goh Wayen",
    "image": "/images/members/goh-wayen.jpg"
  },
  {
    "name": "Ho zan na",
    "image": "/images/members/ho-zan-na.jpg"
  },
  {
    "name": "Hong Min Thong",
    "image": "/images/members/hong-min-thong.jpg"
  },
  {
    "name": "Hue Wan Teng",
    "image": "/images/members/hue-wan-teng.jpg"
  },
  {
    "name": "Jeremy Kan",
    "image": "/images/members/jeremy-kan.jpg"
  },
  {
    "name": "Joshua Sam",
    "image": "/images/members/joshua-sam.jpg"
  },
  {
    "name": "Keh Zyi Yenn",
    "image": "/images/members/keh-zyi-yenn.jpg"
  },
  {
    "name": "Kong Cai Yi",
    "image": "/images/members/kong-cai-yi.jpg"
  },
  {
    "name": "Lai Pei Xi",
    "image": "/images/members/lai-pei-xi.jpg"
  },
  {
    "name": "Leong Jiahui",
    "image": "/images/members/leong-jiahui.jpg"
  },
  {
    "name": "Lee Yi Jing (Roy)",
    "image": "/images/members/lee-yi-jing-roy.jpg"
  },
  {
    "name": "Lee Zoe",
    "image": "/images/members/lee-zoe.jpg"
  },
  {
    "name": "Lim En Yu",
    "image": "/images/members/lim-en-yu.jpg"
  },
  {
    "name": "Loh Jynshwen",
    "image": "/images/members/loh-jynshwen.jpg"
  },
  {
    "name": "Loh Yong Shuen",
    "image": "/images/members/loh-yong-shuen.jpg"
  },
  {
    "name": "Lorraine Lim",
    "image": "/images/members/lorraine-lim.jpg"
  },
  {
    "name": "Ng Poh Yen",
    "image": "/images/members/ng-poh-yen.jpg"
  },
  {
    "name": "Nur Alyssa",
    "image": "/images/members/nur-alyssa.jpg"
  },
  {
    "name": "Pang Peying",
    "image": "/images/members/pang-peying.jpg"
  },
  {
    "name": "Parveen Raaj",
    "image": "/images/members/parveen-raaj.jpg"
  },
  {
    "name": "Poh Zi Qian",
    "image": "/images/members/poh-zi-qian.jpg"
  },
  {
    "name": "Shaohanna Joy Khoo",
    "image": "/images/members/shaohanna-joy-khoo.jpg"
  },
  {
    "name": "Sri Vaishnevi",
    "image": "/images/members/sri-vaishnevi.jpg"
  },
  {
    "name": "Teh Su Wei",
    "image": "/images/members/teh-su-wei.jpg"
  },
  {
    "name": "Wan Hanim Syauqina",
    "image": "/images/members/wan-hanim-syauqina.jpg"
  },
  {
    "name": "Wong Hui Jia",
    "image": "/images/members/wong-hui-jia.jpg"
  },
  {
    "name": "Wong Khye Qing",
    "image": "/images/members/wong-khye-qing.jpg"
  },
  {
    "name": "Wong Wan Qing",
    "image": "/images/members/wong-wan-qing.jpg"
  },
  {
    "name": "Wong Yi Ming Victor",
    "image": "/images/members/wong-yi-ming-victor.jpg"
  },
  {
    "name": "Young Zhi xuan",
    "image": "/images/members/young-zhi-xuan.jpg"
  },
  {
    "name": "Yong Tung Joe",
    "image": "/images/members/yong-tung-joe.jpg"
  }
]

// Apprentices 2025, alphabetical.
export const apprentices: Member[] = [
  {
    "name": "Aleesya Izzhana Binti Syaiful Izdihar",
    "image": "/images/members/aleesya-izzhana.jpg"
  },
  {
    "name": "Angelova Sidney Tanzil",
    "image": "/images/members/angelova-sidney-tanzil.jpg"
  },
  {
    "name": "Aryan Kashyap",
    "image": "/images/members/aryan-kashyap.jpg"
  },
  {
    "name": "Bryan Cheng Yi Khai",
    "image": "/images/members/bryan-cheng-yi-khai.jpg"
  },
  {
    "name": "Chia Xin Xuan",
    "image": "/images/members/chia-xin-xuan.jpg"
  },
  {
    "name": "Chong Man San",
    "image": "/images/members/chong-man-san.jpg"
  },
  {
    "name": "Chou Wen Wei",
    "image": "/images/members/chou-wen-wei.jpg"
  },
  {
    "name": "Cindy Chuah Chin Li",
    "image": "/images/members/cindy-chuah-chin-li.jpg"
  },
  {
    "name": "Elvina Laurencia Ryanto",
    "image": "/images/members/elvina-laurencia-ryanto.jpg"
  },
  {
    "name": "Evelyn Octaria Witanto",
    "image": "/images/members/evelyn-octaria-witanto.jpg"
  },
  {
    "name": "Felice",
    "image": "/images/members/felice.jpg"
  },
  {
    "name": "Gabrielle Yap Ning Xuan",
    "image": "/images/members/gabrielle-yap-ning-xuan.jpg"
  },
  {
    "name": "Hing Hai Yun",
    "image": "/images/members/hing-hai-yun.jpg"
  },
  {
    "name": "Iris Kwai Kit Ying",
    "image": "/images/members/iris-kwai-kit-ying.jpg"
  },
  {
    "name": "Jacqueline Lo Jia En",
    "image": "/images/members/jacqueline-lo-jia-en.jpg"
  },
  {
    "name": "Jesselyn Liew Yi Zhen",
    "image": "/images/members/jesselyn-liew-yi-zhen.jpg"
  },
  {
    "name": "Joanne Phang Zi Xuan",
    "image": "/images/members/joanne-phang-zi-xuan.jpg"
  },
  {
    "name": "Joel John Tan Juner",
    "image": "/images/members/joel-john-tan-juner.jpg"
  },
  {
    "name": "Khoo Xiao Ming",
    "image": "/images/members/khoo-xiao-ming.jpg"
  },
  {
    "name": "Khor Vi Ken",
    "image": "/images/members/khor-vi-ken.jpg"
  },
  {
    "name": "Lai Wei Qi",
    "image": "/images/members/lai-wei-qi.jpg"
  },
  {
    "name": "Lee Sam Yee Cyndi",
    "image": "/images/members/lee-sam-yee-cyndi.jpg"
  },
  {
    "name": "Liew Zi Yi",
    "image": "/images/members/liew-zi-yi.jpg"
  },
  {
    "name": "Md Rumaiut Islam (Sabid)",
    "image": "/images/members/md-rumaiut-islam-sabid.jpg"
  },
  {
    "name": "Nurin Karmila Binti Hismawadi",
    "image": "/images/members/nurin-karmila-binti-hismawadi.jpg"
  },
  {
    "name": "Pelicia Tang Ying Jing",
    "image": "/images/members/pelicia-tang-ying-jing.jpg"
  },
  {
    "name": "Rafidah Tan Xue Rou",
    "image": "/images/members/rafidah-tan-xue-rou.jpg"
  },
  {
    "name": "Rianna Tseu Kar Yin",
    "image": "/images/members/rianna-tseu-kar-yin.jpg"
  },
  {
    "name": "Siew Zhi Yin",
    "image": "/images/members/siew-zhi-yin.jpg"
  },
  {
    "name": "Tan Ming Reo",
    "image": "/images/members/tan-ming-reo.jpg"
  },
  {
    "name": "Wong Ki Hurn",
    "image": "/images/members/wong-ki-hurn.jpg"
  },
  {
    "name": "Zara Afrin Ali",
    "image": "/images/members/zara-afrin-ali.jpg"
  }
]
