var Tasks = []; 
console.log("Welcome to the website")

function afficherTaches(){
    const listeElement = document.getElementById('taskList');
    listeElement.innerHTML = ''; 
    
    for(let i = 0; i < Tasks.length; i++){
        const tache = Tasks[i];
        const nouvelleTache = document.createElement('li');
        nouvelleTache.textContent = tache.texte;
        
        
        if(tache.terminee){
            nouvelleTache.style.textDecoration = "line-through";
            nouvelleTache.style.color = "gray";
            nouvelleTache.classList.add('completed');
        }
        
        listeElement.appendChild(nouvelleTache);
    }
}

function ajouterTache(){
    const inputElement = document.getElementById('taskInput');
    const task = inputElement.value;

    if(task.trim() == ''){
        alert("Veuillez saisir une tache!")
        return;
    }

    const nouvelleTacheObj = {
        texte: task,
        terminee: false
    };
    

    Tasks.push(nouvelleTacheObj);


    afficherTaches();
    

    inputElement.value = '';

    console.log("Tâches actuelles:", Tasks);
}

function supprimerTache(){
    if(Tasks.length > 0){
        Tasks.pop(); 
        afficherTaches(); 
    } else {
        alert("Aucune tâche à supprimer!");
    }
}

function terminerTache(){
    if(Tasks.length > 0){
        const derniereTache = Tasks[Tasks.length - 1];
        
        if(!derniereTache.terminee){
            derniereTache.terminee = true; 
            afficherTaches();
            alert("Tâche terminée!");
        } else {
            alert("Cette tâche est déjà terminée!");
        }
    } else {
        alert("Aucune tâche à terminer!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addBtn').addEventListener('click', ajouterTache);
    document.getElementById('deleteBtn').addEventListener('click', supprimerTache);
    document.getElementById('completeBtn').addEventListener('click', terminerTache);
});