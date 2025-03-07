'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        id: 1,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-1/1-xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-001.png',
        activity_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-1/1-xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-002.png',
        activity_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-1/1-xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-003.png',
        activity_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-1/1-xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-004.png',
        activity_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-1/1-xiong-ya-li-bu-da-pei-si--duo-nao-he-huang-hun-you-chuan-han-yin-pin-005.png',
        activity_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 6,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-2/2-xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-001.png',
        activity_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-2/2-xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-002.png',
        activity_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-2/2-xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-003.png',
        activity_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-2/2-xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-004.png',
        activity_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-2/2-xiong-ya-li-bu-da-pei-si--sai-qie-ni-wen-quan-yu-chang-men-piao-005.png',
        activity_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 11,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-3/3-tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-001.jpg',
        activity_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-3/3-tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-002.png',
        activity_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-3/3-tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-003.png',
        activity_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-3/3-tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-004.png',
        activity_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-3/3-tai-guo-man-gu-jimthompson-gu-ju-bo-wu-guan-dao-lan-005.png',
        activity_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 16,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-4/4-tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-001.png',
        activity_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 17,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-4/4-tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-002.png',
        activity_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 18,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-4/4-tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-003.png',
        activity_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 19,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-4/4-tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-004.png',
        activity_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 20,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-4/4-tai-guo-man-gu--man-gu-yi-ri-you--wo-fo-si--zheng-wang-miao--da-huang-gong--yu-fo-si--bao-tuan-005.png',
        activity_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 21,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-5/5-tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-001.png',
        activity_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 22,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-5/5-tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-002.png',
        activity_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 23,
        image_url: 'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-5/5-tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-003.png',
        activity_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 24,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-5/5-tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-004.png',
        activity_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 25,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-5/5-tai-guo-man-gu--man-gu-ye-sheng-dong-wu-yuan-yi-ri-you--pin-che--bao-che-005.png',
        activity_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 26,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-6/6-chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-001.png',
        activity_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 27,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-6/6-chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-002.png',
        activity_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 28,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-6/6-chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-003.png',
        activity_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 29,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-6/6-chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-004.png',
        activity_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 30,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-6/6-chang-you-man-gu--zhao-pi-ye-he-guan-guang-you-lan-chuan-piao-quan-005.png',
        activity_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 31,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-7/7-wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-001.png',
        activity_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 32,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-7/7-wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-002.png',
        activity_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 33,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-7/7-wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-003.png',
        activity_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 34,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-7/7-wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-004.png',
        activity_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 35,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-7/7-wei-ye-na--qian-qian-gong-zhu-bo-wu-guan-sisimuseum-005.png',
        activity_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 36,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-8/8-ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-001.png',
        activity_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 37,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-8/8-ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-002.png',
        activity_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 38,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-8/8-ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-003.png',
        activity_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 39,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-8/8-ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-004.png',
        activity_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 40,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-8/8-ao-di-li--ha-xiu-ta-te-hallstatt-yi-ri-you--wei-ye-na-chu-fa-005.png',
        activity_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 41,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-10/10-jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-001.png',
        activity_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 42,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-10/10-jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-002.png',
        activity_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 43,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-10/10-jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-003.png',
        activity_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 44,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-10/10-jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-004.png',
        activity_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 45,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-10/10-jie-ke-ku-lun-luo-fu-filmlegendsexperiencemuseum-005.png',
        activity_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 46,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--11/11-ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--001.png',
        activity_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 47,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--11/11-ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--002.png',
        activity_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 48,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--11/11-ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--003.png',
        activity_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 49,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--11/11-ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--004.png',
        activity_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 50,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--11/11-ma-lai-xi-ya-sha-ba-10-tian-9-wan-sha-ba-zi-ran-ti-yan-zhi-lv--ma-bu-dao--005.png',
        activity_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 51,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--12/12-ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--001.png',
        activity_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 52,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--12/12-ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--002.png',
        activity_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 53,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--12/12-ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--003.png',
        activity_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 54,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--12/12-ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--004.png',
        activity_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 55,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--12/12-ming-gu-wu-shi-jie-yi-chan-bai-chuan-xiang--fei-dan-gao-shan-san-bu--ai-zhi-xian--qi-fu-xian--005.png',
        activity_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 56,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao--sheng-wei-ta-da-jiao-tang-he-gui-zu-hua-yuan--bu-la-ge-chu-fa-9/9-jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao001.png',
        activity_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 57,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao--sheng-wei-ta-da-jiao-tang-he-gui-zu-hua-yuan--bu-la-ge-chu-fa-9/9-jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao002.png',
        activity_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 58,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao--sheng-wei-ta-da-jiao-tang-he-gui-zu-hua-yuan--bu-la-ge-chu-fa-9/9-jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao003.png',
        activity_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 59,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao--sheng-wei-ta-da-jiao-tang-he-gui-zu-hua-yuan--bu-la-ge-chu-fa-9/9-jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao004.png',
        activity_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 60,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/activities/jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao--sheng-wei-ta-da-jiao-tang-he-gui-zu-hua-yuan--bu-la-ge-chu-fa-9/9-jie-ke-ku-lun-luo-fu-yi-ri-you--ku-lun-luo-fu-cheng-bao005.png',
        activity_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 61,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ai-fei-er-tie-ta/1-ai-fei-er-tie-ta-1.jpg',
        location_id: 15,
        created_at: '2025-01-31 18:56:16',
        updated_at: '2025-01-31 18:56:16',
      },
      {
        id: 62,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ai-fei-er-tie-ta/1-ai-fei-er-tie-ta-2.jpg',
        location_id: 15,
        created_at: '2025-01-31 18:56:17',
        updated_at: '2025-01-31 18:56:17',
      },
      {
        id: 63,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ai-fei-er-tie-ta/1-ai-fei-er-tie-ta-3.jpg',
        location_id: 15,
        created_at: '2025-01-31 18:56:18',
        updated_at: '2025-01-31 18:56:18',
      },
      {
        id: 64,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ai-fei-er-tie-ta/1-ai-fei-er-tie-ta-4.jpg',
        location_id: 15,
        created_at: '2025-01-31 18:56:19',
        updated_at: '2025-01-31 18:56:19',
      },
      {
        id: 65,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ai-fei-er-tie-ta/1-ai-fei-er-tie-ta-5.jpg',
        location_id: 15,
        created_at: '2025-01-31 18:56:20',
        updated_at: '2025-01-31 18:56:20',
      },

      {
        id: 66,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/zi-you-nv-shen-xiang/2-zi-you-nv-shen-xiang-1.jpg',
        location_id: 12,
        created_at: '2025-01-31 18:59:51',
        updated_at: '2025-01-31 18:59:51',
      },
      {
        id: 67,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/zi-you-nv-shen-xiang/2-zi-you-nv-shen-xiang-2.jpg',
        location_id: 12,
        created_at: '2025-01-31 18:59:54',
        updated_at: '2025-01-31 18:59:54',
      },
      {
        id: 68,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/zi-you-nv-shen-xiang/2-zi-you-nv-shen-xiang-3.jpg',
        location_id: 12,
        created_at: '2025-01-31 18:59:55',
        updated_at: '2025-01-31 18:59:55',
      },
      {
        id: 69,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/zi-you-nv-shen-xiang/2-zi-you-nv-shen-xiang-4.jpg',
        location_id: 12,
        created_at: '2025-01-31 18:59:56',
        updated_at: '2025-01-31 18:59:56',
      },
      {
        id: 70,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/zi-you-nv-shen-xiang/2-zi-you-nv-shen-xiang-5.jpg',
        location_id: 12,
        created_at: '2025-01-31 18:59:57',
        updated_at: '2025-01-31 18:59:57',
      },

      {
        id: 71,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lu-gang-lao-jie/3-lu-gang-lao-jie-1.jpg',
        location_id: 9,
        created_at: '2025-01-31 19:21:40',
        updated_at: '2025-01-31 19:21:40',
      },
      {
        id: 72,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lu-gang-lao-jie/3-lu-gang-lao-jie-2.jpg',
        location_id: 9,
        created_at: '2025-01-31 19:21:41',
        updated_at: '2025-01-31 19:21:41',
      },
      {
        id: 73,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lu-gang-lao-jie/3-lu-gang-lao-jie-3.jpg',
        location_id: 9,
        created_at: '2025-01-31 19:21:41',
        updated_at: '2025-01-31 19:21:41',
      },
      {
        id: 74,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lu-gang-lao-jie/3-lu-gang-lao-jie-4.jpg',
        location_id: 9,
        created_at: '2025-01-31 19:21:43',
        updated_at: '2025-01-31 19:21:43',
      },
      {
        id: 75,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lu-gang-lao-jie/3-lu-gang-lao-jie-5.jpg',
        location_id: 9,
        created_at: '2025-01-31 19:21:43',
        updated_at: '2025-01-31 19:21:43',
      },

      {
        id: 76,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ba-da-ya-si-fang-shui-shang-shi-chang/4-ba-da-ya-si-fang-shui-shang-shi-chang-1.jpg',
        location_id: 10,
        created_at: '2025-01-31 19:25:35',
        updated_at: '2025-01-31 19:25:35',
      },
      {
        id: 77,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ba-da-ya-si-fang-shui-shang-shi-chang/4-ba-da-ya-si-fang-shui-shang-shi-chang-2.jpg',
        location_id: 10,
        created_at: '2025-01-31 19:25:36',
        updated_at: '2025-01-31 19:25:36',
      },
      {
        id: 78,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ba-da-ya-si-fang-shui-shang-shi-chang/4-ba-da-ya-si-fang-shui-shang-shi-chang-3.jpg',
        location_id: 10,
        created_at: '2025-01-31 19:25:37',
        updated_at: '2025-01-31 19:25:37',
      },
      {
        id: 79,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ba-da-ya-si-fang-shui-shang-shi-chang/4-ba-da-ya-si-fang-shui-shang-shi-chang-4.jpg',
        location_id: 10,
        created_at: '2025-01-31 19:25:37',
        updated_at: '2025-01-31 19:25:37',
      },
      {
        id: 80,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ba-da-ya-si-fang-shui-shang-shi-chang/4-ba-da-ya-si-fang-shui-shang-shi-chang-5.jpg',
        location_id: 10,
        created_at: '2025-01-31 19:25:38',
        updated_at: '2025-01-31 19:25:38',
      },

      {
        id: 81,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/tai-ping-shan/5-tai-ping-shan-1.jpg',
        location_id: 11,
        created_at: '2025-01-31 19:28:39',
        updated_at: '2025-01-31 19:28:39',
      },
      {
        id: 82,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/tai-ping-shan/5-tai-ping-shan-2.jpg',
        location_id: 11,
        created_at: '2025-01-31 19:28:40',
        updated_at: '2025-01-31 19:28:40',
      },
      {
        id: 83,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/tai-ping-shan/5-tai-ping-shan-3.jpg',
        location_id: 11,
        created_at: '2025-01-31 19:28:41',
        updated_at: '2025-01-31 19:28:41',
      },
      {
        id: 84,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/tai-ping-shan/5-tai-ping-shan-4.jpg',
        location_id: 11,
        created_at: '2025-01-31 19:28:42',
        updated_at: '2025-01-31 19:28:42',
      },
      {
        id: 85,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/tai-ping-shan/5-tai-ping-shan-5.jpg',
        location_id: 11,
        created_at: '2025-01-31 19:28:42',
        updated_at: '2025-01-31 19:28:42',
      },

      {
        id: 86,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ha-xiu-ta-te-tian-kong-bu-dao/6-ha-xiu-ta-te-tian-kong-bu-dao-1.jpg',
        location_id: 8,
        created_at: '2025-01-31 19:39:35',
        updated_at: '2025-01-31 19:39:35',
      },
      {
        id: 87,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ha-xiu-ta-te-tian-kong-bu-dao/6-ha-xiu-ta-te-tian-kong-bu-dao-2.jpg',
        location_id: 8,
        created_at: '2025-01-31 19:39:35',
        updated_at: '2025-01-31 19:39:35',
      },
      {
        id: 88,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ha-xiu-ta-te-tian-kong-bu-dao/6-ha-xiu-ta-te-tian-kong-bu-dao-3.jpg',
        location_id: 8,
        created_at: '2025-01-31 19:39:36',
        updated_at: '2025-01-31 19:39:36',
      },
      {
        id: 89,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ha-xiu-ta-te-tian-kong-bu-dao/6-ha-xiu-ta-te-tian-kong-bu-dao-4.jpg',
        location_id: 8,
        created_at: '2025-01-31 19:39:37',
        updated_at: '2025-01-31 19:39:37',
      },
      {
        id: 90,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ha-xiu-ta-te-tian-kong-bu-dao/6-ha-xiu-ta-te-tian-kong-bu-dao-5.jpg',
        location_id: 8,
        created_at: '2025-01-31 19:39:38',
        updated_at: '2025-01-31 19:39:38',
      },

      {
        id: 91,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/fu-shi-shan/7-fu-shi-shan-1.jpg',
        location_id: 13,
        created_at: '2025-01-31 19:47:10',
        updated_at: '2025-01-31 19:47:10',
      },
      {
        id: 92,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/fu-shi-shan/7-fu-shi-shan-2.jpg',
        location_id: 13,
        created_at: '2025-01-31 19:47:11',
        updated_at: '2025-01-31 19:47:11',
      },
      {
        id: 93,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/fu-shi-shan/7-fu-shi-shan-3.jpg',
        location_id: 13,
        created_at: '2025-01-31 19:47:12',
        updated_at: '2025-01-31 19:47:12',
      },
      {
        id: 94,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/fu-shi-shan/7-fu-shi-shan-4.jpg',
        location_id: 13,
        created_at: '2025-01-31 19:47:13',
        updated_at: '2025-01-31 19:47:13',
      },
      {
        id: 95,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/fu-shi-shan/7-fu-shi-shan-5.jpg',
        location_id: 13,
        created_at: '2025-01-31 19:47:13',
        updated_at: '2025-01-31 19:47:13',
      },

      {
        id: 96,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/xue-li-ge-ju-yuan/8-xue-li-ge-ju-yuan-1.jpg',
        location_id: 14,
        created_at: '2025-01-31 19:50:13',
        updated_at: '2025-01-31 19:50:13',
      },
      {
        id: 97,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/xue-li-ge-ju-yuan/8-xue-li-ge-ju-yuan-2.jpg',
        location_id: 14,
        created_at: '2025-01-31 19:50:14',
        updated_at: '2025-01-31 19:50:14',
      },
      {
        id: 98,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/xue-li-ge-ju-yuan/8-xue-li-ge-ju-yuan-3.jpg',
        location_id: 14,
        created_at: '2025-01-31 19:50:15',
        updated_at: '2025-01-31 19:50:15',
      },
      {
        id: 99,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/xue-li-ge-ju-yuan/8-xue-li-ge-ju-yuan-4.jpg',
        location_id: 14,
        created_at: '2025-01-31 19:50:16',
        updated_at: '2025-01-31 19:50:16',
      },
      {
        id: 100,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/xue-li-ge-ju-yuan/8-xue-li-ge-ju-yuan-5.jpg',
        location_id: 14,
        created_at: '2025-01-31 19:50:17',
        updated_at: '2025-01-31 19:50:17',
      },

      {
        id: 101,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sai-qie-ni-wen-quan-yu-chang/9-sai-qie-ni-wen-quan-yu-chang-1.jpg',
        location_id: 7,
        created_at: '2025-01-31 19:57:01',
        updated_at: '2025-01-31 19:57:01',
      },
      {
        id: 102,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sai-qie-ni-wen-quan-yu-chang/9-sai-qie-ni-wen-quan-yu-chang-2.jpg',
        location_id: 7,
        created_at: '2025-01-31 19:57:02',
        updated_at: '2025-01-31 19:57:02',
      },
      {
        id: 103,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sai-qie-ni-wen-quan-yu-chang/9-sai-qie-ni-wen-quan-yu-chang-3.jpg',
        location_id: 7,
        created_at: '2025-01-31 19:57:03',
        updated_at: '2025-01-31 19:57:03',
      },
      {
        id: 104,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sai-qie-ni-wen-quan-yu-chang/9-sai-qie-ni-wen-quan-yu-chang-4.jpg',
        location_id: 7,
        created_at: '2025-01-31 19:57:04',
        updated_at: '2025-01-31 19:57:04',
      },
      {
        id: 105,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sai-qie-ni-wen-quan-yu-chang/9-sai-qie-ni-wen-quan-yu-chang-5.jpg',
        location_id: 7,
        created_at: '2025-01-31 19:57:05',
        updated_at: '2025-01-31 19:57:05',
      },

      {
        id: 106,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ri-yue-tan/10-ri-yue-tan-1.jpg',
        location_id: 16,
        created_at: '2025-01-31 20:03:31',
        updated_at: '2025-01-31 20:03:31',
      },
      {
        id: 107,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ri-yue-tan/10-ri-yue-tan-2.jpg',
        location_id: 16,
        created_at: '2025-01-31 20:03:32',
        updated_at: '2025-01-31 20:03:32',
      },
      {
        id: 108,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ri-yue-tan/10-ri-yue-tan-3.jpg',
        location_id: 16,
        created_at: '2025-01-31 20:03:32',
        updated_at: '2025-01-31 20:03:32',
      },
      {
        id: 109,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ri-yue-tan/10-ri-yue-tan-4.jpg',
        location_id: 16,
        created_at: '2025-01-31 20:03:33',
        updated_at: '2025-01-31 20:03:33',
      },
      {
        id: 110,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ri-yue-tan/10-ri-yue-tan-5.jpg',
        location_id: 16,
        created_at: '2025-01-31 20:03:33',
        updated_at: '2025-01-31 20:03:33',
      },

      {
        id: 111,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lan-dong/11-lan-dong-1.jpg',
        location_id: 17,
        created_at: '2025-01-31 20:07:58',
        updated_at: '2025-01-31 20:07:58',
      },
      {
        id: 112,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lan-dong/11-lan-dong-2.jpg',
        location_id: 17,
        created_at: '2025-01-31 20:07:58',
        updated_at: '2025-01-31 20:07:58',
      },
      {
        id: 113,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lan-dong/11-lan-dong-3.jpg',
        location_id: 17,
        created_at: '2025-01-31 20:07:59',
        updated_at: '2025-01-31 20:07:59',
      },
      {
        id: 114,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lan-dong/11-lan-dong-4.jpg',
        location_id: 17,
        created_at: '2025-01-31 20:08:00',
        updated_at: '2025-01-31 20:08:00',
      },
      {
        id: 115,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/lan-dong/11-lan-dong-5.jpg',
        location_id: 17,
        created_at: '2025-01-31 20:08:02',
        updated_at: '2025-01-31 20:08:02',
      },

      {
        id: 116,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/shou-er-ta/12-shou-er-ta-1.jpg',
        location_id: 18,
        created_at: '2025-01-31 20:18:51',
        updated_at: '2025-01-31 20:18:51',
      },
      {
        id: 117,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/shou-er-ta/12-shou-er-ta-2.jpg',
        location_id: 18,
        created_at: '2025-01-31 20:18:52',
        updated_at: '2025-01-31 20:18:52',
      },
      {
        id: 118,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/shou-er-ta/12-shou-er-ta-3.jpg',
        location_id: 18,
        created_at: '2025-01-31 20:18:52',
        updated_at: '2025-01-31 20:18:52',
      },
      {
        id: 119,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/shou-er-ta/12-shou-er-ta-4.jpg',
        location_id: 18,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 120,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/shou-er-ta/12-shou-er-ta-5.jpg',
        location_id: 18,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 121,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--1/1-ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--001.avif',
        product_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 122,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--1/1-ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--002.avif',
        product_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 123,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--1/1-ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--003.avif',
        product_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 124,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--1/1-ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--004.avif',
        product_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 125,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--1/1-ri-ben-huan-qiu-ying-cheng-men-piao-universalstudiosjapan-ri-ben-da-ban--guan-fang-shou-quan--005.avif',
        product_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 126,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-2/2-ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-001.png',
        product_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 127,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-2/2-ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-002.png',
        product_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 128,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-2/2-ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-003.png',
        product_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 129,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-2/2-ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-004.png',
        product_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 130,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-2/2-ri-ben-da-ban--da-ban-le-gao-le-yuan-men-piao-legolanddiscoverycenterosaka-005.png',
        product_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 131,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-3/3-ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-001.avif',
        product_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 132,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-3/3-ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-002.avif',
        product_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 133,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-3/3-ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-003.avif',
        product_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 134,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-3/3-ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-004.avif',
        product_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 135,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-3/3-ri-ben-esim-ka--mei-ri-gao-su--zong-liang--wu-xian-liu-liang-chi-dao-bao-fang-an--you-hui-65-zhe-005.avif',
        product_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 136,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/-you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-4/4--you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-001.avif',
        product_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 137,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/-you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-4/4--you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-002.avif',
        product_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 138,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/-you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-4/4--you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-003.avif',
        product_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 139,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/-you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-4/4--you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-004.avif',
        product_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 140,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/-you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-4/4--you-hui-54-zhe--han-guo-wang-ka--han-guo-gao-su-mei-ri-liu-liang--zong-liang-xing-esim-005.avif',
        product_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 141,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan.avif/5-tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan-001.avif',
        product_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 142,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan.avif/5-tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan-002.avif',
        product_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 143,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan.avif/5-tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan-003.avif',
        product_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 144,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan.avif/5-tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan-004.avif',
        product_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 145,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan.avif/5-tai-wan-tao-yuan-ji-chang-jie-song--tao-yuan-guo-ji-ji-chang-tpe-wang-fan-005.avif',
        product_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 146,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-001.avif',
        product_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 147,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-002.avif',
        product_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 148,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-003.avif',
        product_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 149,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-004.avif',
        product_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 150,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-005.avif',
        product_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 151,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-001.avif',
        product_id: 7,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 152,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-002.avif',
        product_id: 7,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 153,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-003.avif',
        product_id: 7,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 154,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-004.avif',
        product_id: 7,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 155,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-6/6-ri-ben-cheng-tian-ji-chang-zhuan-che-jie-song--ji-chang--dong-jing-23-qu-nei-ji-ge-da-jing-dian-005.avif',
        product_id: 7,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 156,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-8/8-tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-001.jpg',
        product_id: 8,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 157,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-8/8-tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-002.jpg',
        product_id: 8,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 158,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-8/8-tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-003.jpg',
        product_id: 8,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 159,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-8/8-tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-004.jpg',
        product_id: 8,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 160,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-8/8-tai-bei-zhan-lan--cao-jian-mi-sheng-de--gui-ji--yu--qi-ji-wcollectionmore1951-2005-005.jpg',
        product_id: 8,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 161,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-9/9-tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-001.jpeg',
        product_id: 9,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 162,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-9/9-tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-002.webp',
        product_id: 9,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 163,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-9/9-tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-003.jpg',
        product_id: 9,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 164,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-9/9-tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-004.jpg',
        product_id: 9,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 165,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-9/9-tai-bei-zhan-lan-animage-za-zhi-he-ji-bu-li-zhan-005.jpg',
        product_id: 9,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 166,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-10/10-tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-001.png',
        product_id: 10,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 167,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-10/10-tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-002.png',
        product_id: 10,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 168,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-10/10-tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-003.png',
        product_id: 10,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 169,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-10/10-tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-004.png',
        product_id: 10,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 170,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-10/10-tai-zhong--ke-bo-guan--guo-li-zi-ran-ke-xue-bo-wu-guan-men-piao-ke-bo-guan-005.png',
        product_id: 10,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 171,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-11/11-fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-001.png',
        product_id: 11,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 172,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-11/11-fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-002.png',
        product_id: 11,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 173,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-11/11-fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-003.png',
        product_id: 11,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 174,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-11/11-fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-004.png',
        product_id: 11,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 175,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/products/fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-11/11-fa-guo--ba-li-di-shi-ni-fei-zhi-ding-ri-qi-le-yuan-men-piao-005.png',
        product_id: 11,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 176,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/bu-da-pei-si/13-bu-da-pei-si-1.jpg',
        location_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 177,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/bu-da-pei-si/13-bu-da-pei-si-2.jpg',
        location_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 178,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/bu-da-pei-si/13-bu-da-pei-si-3.jpg',
        location_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 179,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/bu-da-pei-si/13-bu-da-pei-si-4.jpg',
        location_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 180,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/bu-da-pei-si/13-bu-da-pei-si-5.jpg',
        location_id: 1,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 181,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/man-gu/14-man-gu-1.jpg',
        location_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 182,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/man-gu/14-man-gu-2.jpg',
        location_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 183,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/man-gu/14-man-gu-3.jpg',
        location_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 184,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/man-gu/14-man-gu-4.jpg',
        location_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 185,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/man-gu/14-man-gu-5.jpg',
        location_id: 2,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 186,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/wei-ye-na/15-wei-ye-na-1.jpg',
        location_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 187,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/wei-ye-na/15-wei-ye-na-2.jpg',
        location_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 188,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/wei-ye-na/15-wei-ye-na-3.jpg',
        location_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 189,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/wei-ye-na/15-wei-ye-na-4.jpg',
        location_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 190,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/wei-ye-na/15-wei-ye-na-5.jpg',
        location_id: 3,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 191,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/qi-si-ji-ku-lun-long/16-qi-si-ji-ku-lun-long-1.jpg',
        location_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 192,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/qi-si-ji-ku-lun-long/16-qi-si-ji-ku-lun-long-2.jpg',
        location_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 193,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/qi-si-ji-ku-lun-long/16-qi-si-ji-ku-lun-long-3.jpg',
        location_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 194,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/qi-si-ji-ku-lun-long/16-qi-si-ji-ku-lun-long-4.jpg',
        location_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 195,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/qi-si-ji-ku-lun-long/16-qi-si-ji-ku-lun-long-5.jpg',
        location_id: 4,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 196,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sha-ba/17-sha-ba-1.jpg',
        location_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 197,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sha-ba/17-sha-ba-2.jpg',
        location_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 198,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sha-ba/17-sha-ba-3.jpg',
        location_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 199,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sha-ba/17-sha-ba-4.jpg',
        location_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 200,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/sha-ba/17-sha-ba-5.jpg',
        location_id: 5,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 201,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ming-gu-wu-shi/18-ming-gu-wu-shi-1.jpg',
        location_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 202,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ming-gu-wu-shi/18-ming-gu-wu-shi-2.jpg',
        location_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 203,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ming-gu-wu-shi/18-ming-gu-wu-shi-3.jpg',
        location_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 204,
        image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ming-gu-wu-shi/18-ming-gu-wu-shi-4.jpg',
        location_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      },
      {
        id: 205,
          image_url:
          'https://storage.googleapis.com/taptour/uploads/locations/ming-gu-wu-shi/18-ming-gu-wu-shi-5.jpg',
        location_id: 6,
        created_at: '2025-01-31 20:18:53',
        updated_at: '2025-01-31 20:18:53',
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {})
  },
}
