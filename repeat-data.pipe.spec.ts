import { RepeatDataPipe } from './repeat-data.pipe';

describe('RepeatDataPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatDataPipe();
    expect(pipe).toBeTruthy();
  });

  it("should return repeating values",()=>{
    let repeat:RepeatDataPipe=new RepeatDataPipe();

    let str=repeat.transform("Ankita",2);

    expect(str).toEqual("Ankita Ankita");
  });
});
