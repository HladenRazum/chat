import { Separator } from '@/components/ui/Separator';

function App() {
  return (
    <div className='container'>
      <div className='flex h-screen space-x-4 text-sm'>
        <div className='w-[400px] p-5'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            veritatis deleniti iusto et laboriosam. Dignissimos natus est eum
            doloribus suscipit!
          </p>
        </div>
        <Separator orientation='vertical' />
        <div className='w-full p-5'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
            fugit quidem facilis animi earum sint culpa quasi assumenda
            dignissimos perspiciatis adipisci reiciendis, eligendi quam quod
            doloribus, omnis minus esse soluta officia ab sequi? Nulla,
            incidunt. Facilis modi asperiores animi hic. Id harum recusandae
            fugit consequatur ducimus facere dignissimos commodi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
