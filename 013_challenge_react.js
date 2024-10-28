  


  it('Has expected label', function (){
    const component = shallow(<Label value={'Solution'} color={'blue'} />);
    expect(component.text()).toEqual('Solution');
  });

  it('Has expected color', function () {
    const component = shallow(<Label value={'Solution'} color={'blue'} />);
    expect(component.prop('style').color).toEqual('blue');
  })