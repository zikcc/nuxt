<script lang="ts" setup name="renderMemberColumn">
  import type {
    MEMBER
  } from '~/store/constants';
  declare interface MyProp {
    members: MEMBER[];
    willChange: Boolean;
    title: string;
  }
  defineProps < MyProp > ();
</script>

<template>
  <h2 class="section-title-sm seq mb-4">{{ title }}</h2>
  <div :class="`${willChange && 'will-change-opacity'} seq flex flex-wrap`">
    <!-- <img v-for="(skill, idx) in members" :key="idx" :src="`/skills/${skill}.svg`" :alt="skill" width="76" height="76"
      class="skill" /> -->
    <el-row style="width: 100%; padding-left: 2rem;">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(member, idx) in members" :key="idx" class="seq">
        <a :href="member.url" title="点击查看详细信息">
          <div class="grid-content">
            <h5>姓名：{{ member.name }}</h5>
            <h5>籍贯：{{ member.city }}</h5>
            <h5>年级：{{ member.grade }}</h5>
            <h5>研究兴趣：{{ member.interest }}</h5>
            <h5>现状：{{ member.status }}</h5>
            <!-- <h5>url：{{ member.url }}</h5> -->
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .el-col {
    margin: 2rem;
    min-height: 36px;
    color: rgba(255, 255, 255, 1);

  }

  .el-col :hover {
    text-shadow: 0 0px 30px rgba(255, 255, 255, 1); 


  }
 
 
  .el-row ::before {
  content: '';
  width: 0.3rem;
  height: 100%;
  /* background: #f16d6e; */
  background: #efc01a;
  position: absolute;
  top: 0;
  left: 0;
}

</style>