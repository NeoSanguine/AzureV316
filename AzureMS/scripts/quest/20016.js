/*

	퓨어 소스 팩의 스크립트 입니다. (제작 : 엘도라도)

	엔피시아이디 : 
	
	엔피시 이름 : 나인하트

	엔피시가 있는 맵 : 에레브

	엔피시 설명 : 시그너스 튜토리얼


*/

importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else if (mode == 0 && status < 3)
            status--;
	else if (mode == 0 && status == 3) {
	    qm.sendOk("에레브에 오신 것을 환영합니다...");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("안녕하세요, #h #?씨. 시그너스 기사단에 들어온 것을 환영합니다. 제이름은 나인하트 폰 루비스타인. 어린 여제의 책하 역을 맡고 있습니다. 앞으로 자주 뵙게 될 테니, 이름 정도는 기억해 두셔야 할 겁니다. 후훗...");
        } else if (status == 1) {
            qm.sendNextPrev("갑작스럽게 기사단의 일월이 되신 지라 아직은 모르는 게 더 많으실 겁니다. 일단 하나씩 차근차근 설명 드리죠. 이곳은 어딘지 어린 여제란 누구인지, 그리고 우리가 해야 할 일은 무엇인지...");
        } else if (status == 2) {
            qm.sendNextPrev("이 섬의 이름은 에레브. 어린 여제께서 다스리는 마법의 힘이 깃든 섬입니다. 지금도 하늘에 떠 있지여. 필요에 의해 이곳에 머물고 있지만 원래는 메이플 월드 전체를 돌아다니는 배 역할을 하고 있는 섬입니다.");
        } else if (status == 3) {
            qm.sendNextPrev("어린 여제는 말 그대로 황제, 세계를 다스리는 자입니다. 들어보지 못하셨다고요? 아아, 그럴 겁니다. 어린 여제는 군림하되 지배하지는 않는 자. 에레브를 통해 메이플 월드를 떠돌며 바라보는 것만이 그녀의 임무입니다. 평소하면 말입니다...");
        } else if (status == 4) {
            qm.sendNextPrev("하지만 상황은 변했습니다. 사악한 검은 마법사가 다시 깨어날 것을 예고하는 움직임이 세계 곳곳에서 발견되고 있습니다. 오래 전 메이플 월드를 공포로 지배했던 멸망의 왕이 다시 한 번 나타나려 하고 있습니다.");
        } else if (status == 5) {
            qm.sendNextPrev("그러나 사람들은 그것을 모릅니다. 검은 마법사가 사라진지 이미 오래... 긴 세월 동안 위험을 잊은 사람들은 평화에 익숙해져 위험을 느끼지 못하고 있습니다. 이대로라면 다시 한 번 메이플 월드는 검은 마법사의 손에 들어갈 겁니다.");
        } else if (status == 6) {
            qm.sendNextPrev("그렇기에 어린 여제께서 결심하셨습니다. 한 발 먼저 움직이기로... 검은 마법사가 깨어나기 전에 검은 마법사를 물리칠 기사들을 양성하기로 말입니다. 이후의 일은 당신도 알고 계시겟죠? 기사가 되겠다고 말씀하셨으니 말입니다.");
        } else if (status == 5) {
            qm.sendNextPrev("우리가 해야 할 일은 간단합니다. 강해져서, 지금보다 훨씬 더 강해져서 검은 마법사가 돌아왔을 때 그를 물리치는 것. 그가 메이플 월드를 멸망시키지 못하도록 막는 것. 그것이 우리의 목표이며 의무이며, 당신께 주어질 임무입니다.");
        } else if (status == 7) {
            qm.askAcceptDecline("자, 설명은 여기까지 입니다. 이해 하셨습니까?\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 exp");
        } else if (status == 8) {
	    qm.forceStartQuest();	    
	    qm.sendNext("이해하셨다니 다행입니다만... 알고계십니까? 그레벨로는 검은 마법사는 고사하고 그 밑에 수하, 아니 수하의 수하의 애완동물도 퇴치할 수 없습니다? 이래가지고 메이플 월드를 지킬 수 있겠습니까?");
	} else if (status == 9) {
            qm.sendNextPrev("기사단원의 일원이라고는 해도 아직 당신은 기사가 아닙니다. 정식기사는커녕 수련기사로도 임명 받지 못했는걸요. 시간이 흘러도 이대로라면임무는커녕 다신은 시그너스 기사단의 잡역부에 지나지 않을 겁니다...만.");
	} else if (status == 10) {
            qm.sendNextPrev("뭐, 처음부터 강한 자는 없는 법이니까요. 여제께서도 강한 자를 같은 편으로 하기보다는, 강한 자를 기르길 원하셨고... 일단 당신은 좀더 강해져서 수련기사부터 되는 게 좋겠습니다. 기사단원으로써의 임무는 그 후에 이야기 하도록 하죠.");
	} else if (status == 11) {
            qm.sendPrev("왼편에 있는 포탈을 타고 쭉 가다 보면 수련의 숲이라는 곳에 갈 수 있을 겁니다. 그곳에 당신 같은 분을 위한 수련교관, 키쿠가 기다리고 있으니 그에게 가주세요. 레벨 10이 되기 전에는 서로 얼굴 보지 않았으면 좋겟군요.");  
	    qm.gainExp(380);       
	    qm.forceCompleteQuest();
	    qm.dispose();
        }
    }
}