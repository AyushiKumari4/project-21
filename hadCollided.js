function hadCollided(lwall,lbullet){
   bulletRightEdge =lbullet.x + lbullet.width 
   wallLeftEdge = lwall.x;

   if (bulletRightEdge >= wallLeftEdge)
   {
    return true;
   }
   return false;
}