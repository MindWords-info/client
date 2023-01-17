import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import '../../utils/style/index.css'
export const config = {
    runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
    try {

        //  get searchParams
        const { searchParams } = new URL(req.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const hasImage = searchParams.has('image');

        // ?title=<title>&BgColor="blue"
        const hasBgColor = searchParams.has('BgColor');

        // ?title=<title>&BgColor="blue"&color="black"
        const hasColor = searchParams.has('color');

        // add default title
        const title = hasTitle? searchParams.get('title')?.slice(0, 100): 'Minimal blog';
        const image = hasImage? searchParams.get('image'): 'https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg';

        // add default BgColor
        const BgColor = hasBgColor? searchParams.get('BgColor'): 'lightblue';

        // add default color
        const Color = hasColor? searchParams.get('color'): 'black';

        return new ImageResponse(
            (
                <div tw="p-12"
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                    }}
                >
                    <div tw="h-12 flex justify-start items-center text-2xl" className="h-96 h- ">MindWords</div>
                    <div tw="flex justify-between items-center h-full w-full">
                        <div tw="flex flex-col max-w-3/5">
                            <p tw="text-6xl flex">{title}</p>
                            <div>post info</div>
                        </div>
                        <div tw="flex h-94 w-94">
                            <img tw="max-w-96 max-h-96 rounded" src={image!}/>
                        </div>

                    </div>
                    <div>Author info</div>
                </div>
            ),
            {
                width: 1200,
                height: 640,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}