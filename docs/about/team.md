---
layout: page
title: 认识团队
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1990248284&spec=100',
    name: 'Mr.ling',
    links: [
      { icon: 'github', link: 'https://github.com/wling-art' }
    ],
    sponsor: 'https://afdian.com/a/ZLServer',
    actionText: '捐赠'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=869379440&spec=100',
    name: 'Linye_FL',
    links: [
      { icon: 'github', link: 'https://github.com/LinyeFL' }
    ],
  },
]

const partners = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2797202622&spec=100',
    name: 'bftysb',
    title: '捐赠 1 次, 共 200 元'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      认识团队
    </template>
    <template #lead>
      在这个页面你将了解服务器的核心人员组成
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>管理团队</template>
    <template #lead>这是目前白叶服务器的管理团队，感谢他们让白叶更美好！</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>赞助者</template>
    <template #lead>这些是捐赠过白叶服务器的人，感谢他们让服务器渡过难关！(排名不分先后)</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
