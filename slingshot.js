Class Chain {
    constructor(bodyA , bodyB){
        var option = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10

        }
     this.chain = Matter.Constraint.create(option);
     World.add(world,chain);
    }


}