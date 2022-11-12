export const cfgSchema = {
  char: {
    title: '玩家&老婆卡片展示',
    cfg: {
      avatarCard: {
        title: '角色查询',
        key: '角色',
        def: true,
        desc: '使用喵喵版角色卡片作为默认角色卡片功能',
        showDesc: false,
        oldCfgKey: 'char.char'
      },
      avatarProfile: {
        title: '面板查询',
        key: '面板',
        def: true,
        oldCfgKey: 'char.profile'
      },
      groupRank: {
        title: '群面板排名',
        key: '排名',
        def: false,
        desc: '群内的面板伤害及圣遗物排名与查看功能，默认关闭。请根据群友心理素质自行决定是否开启'
      },
      uploadAbyssData: {
        title: '上传深渊',
        key: '深渊',
        def: false,
        oldCfgKey: 'wiki.abyss',
        desc: '使用【#上传深渊】功能取代【#深渊功能】,默认关闭'
      },
      avatarWife: {
        title: '老婆查询',
        key: '老婆',
        def: true,
        oldCfgKey: 'char.wife'
      },
      avatarPoke: {
        title: '戳一戳卡片',
        key: '戳一戳',
        def: true,
        oldCfgKey: 'char.poke'
      }
    }
  },
  wiki: {
    title: '角色资料与信息查询',
    cfg: {
      charWiki: {
        title: '角色图鉴-图鉴',
        key: '图鉴',
        def: true,
        showDesc: false,
        desc: '#刻晴图鉴 的图鉴信息'
      },
      charWikiTalent: {
        title: '角色图鉴-天赋',
        key: '天赋',
        def: true,
        oldCfgKey: 'wiki.wiki',
        showDesc: false,
        desc: '#刻晴天赋/#刻晴命座 的天赋信息'
      },
      charPic: {
        title: '角色图片',
        key: '图片',
        def: true,
        oldCfgKey: 'wiki.pic'
      },
      charPicSe: {
        title: '小清新角色图',
        key: '小清新',
        def: false,
        oldCfgKey: 'char.se',
        desc: '启用后会启用角色图及增量包中的小清新图像，勇士啊，你准备好了吗'
      }
    }
  },
  sys: {
    title: '系统设置',
    cfg: {
      renderScale: {
        title: '渲染精度',
        key: '渲染',
        type: 'num',
        def: 100,
        input: (n) => Math.min(200, Math.max(50, (n * 1 || 100))),
        oldCfgKey: 'sys.scale',
        desc: '可选值50~200，建议100。设置高精度会提高图片的精细度，但因图片较大可能会影响渲染与发送速度'
      },
      help: {
        title: '喵喵作为默认帮助',
        key: '帮助',
        def: false,
        oldCfgKey: 'sys.help',
        desc: '开启后将使用喵喵版帮助作为Yunzai的默认帮助，默认关闭'
      }
    }
  }

}
