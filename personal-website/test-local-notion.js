// 测试本地 Notion 数据获取
const fs = require('fs');
const path = require('path');

// 手动读取 .env.local 文件
function loadEnvFile() {
  const envPath = path.join(__dirname, '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
  }
}

loadEnvFile();

async function testLocalNotion() {
  console.log('🔍 测试本地 Notion 数据获取...');
  
  try {
    // 动态导入我们的函数
    const { getSiteConfig, getSocialLinks, getRecentThoughts, getMarketReview } = await import('./src/lib/notion.ts');
    
    console.log('\n📊 测试 Site Config...');
    const siteConfig = await getSiteConfig();
    console.log('✅ Site Config:', JSON.stringify(siteConfig, null, 2));
    
    console.log('\n🔗 测试 Social Links...');
    const socialLinks = await getSocialLinks();
    console.log('✅ Social Links:', JSON.stringify(socialLinks, null, 2));
    
    console.log('\n💭 测试 Recent Thoughts...');
    const recentThoughts = await getRecentThoughts();
    console.log('✅ Recent Thoughts:', JSON.stringify(recentThoughts, null, 2));
    
    console.log('\n📈 测试 Market Review...');
    const marketReview = await getMarketReview();
    console.log('✅ Market Review:', JSON.stringify(marketReview, null, 2));
    
    console.log('\n🎉 本地 Notion 数据获取测试完成！');
    console.log('\n📋 数据摘要:');
    console.log(`- Site Config 条目数: ${Object.keys(siteConfig).length}`);
    console.log(`- Social Links 条目数: ${socialLinks.length}`);
    console.log(`- Recent Thoughts 分类数: ${recentThoughts.length}`);
    console.log(`- Market Review 条目数: ${marketReview.length}`);
    
  } catch (error) {
    console.error('❌ 测试失败:', error.message);
    console.error('错误详情:', error);
  }
}

testLocalNotion();
