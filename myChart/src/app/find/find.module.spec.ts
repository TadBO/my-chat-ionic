import { FindModule } from './find.module';

describe('FindModule', () => {
  let findModule: FindModule;

  beforeEach(() => {
    findModule = new FindModule();
  });

  it('should create an instance', () => {
    expect(findModule).toBeTruthy();
  });
});
