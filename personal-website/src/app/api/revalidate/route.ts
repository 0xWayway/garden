import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const path = searchParams.get('path') || '/';

    // 如果没有提供 secret 参数，返回 API 状态信息
    if (!secret) {
      return NextResponse.json({ 
        message: 'Revalidation API is working',
        timestamp: new Date().toISOString(),
        note: 'Add ?secret=your_secret to revalidate paths'
      });
    }

    // 验证密钥
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // 重新验证指定路径
    revalidatePath(path);

    return NextResponse.json({ 
      message: `Path ${path} revalidated successfully`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating' }, 
      { status: 500 }
    );
  }
}
