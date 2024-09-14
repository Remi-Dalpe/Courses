Pig-game like in course

Flowchart:
[User rolls dice] => [Generate random dice roll]         => [Display dice roll] => {Is it a 1} => [Add dice roll to current score] => [Display new score]
                                                                                      V yes
[User holds score] => [Add current score to total score] => {Score >= 100?} no => [Switch player]
                                                                  V yes
                                                            [{Current player wins!}]  

[User resets game] => [Set all scores to 0]              => [Set player 1 as starting player] 

[User press htp button] => [HTP modal]

Added features:
 - HTP button displaying a modal explainning how to play.
 - Looser banner also changes.