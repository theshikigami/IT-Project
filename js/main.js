document.addEventListener('DOMContentLoaded', () => {
    const makeSelect = document.querySelector('select[name="make"]');
    if (makeSelect) {
      makeSelect.addEventListener('change', updateModels);
    }
  });
  
  function updateModels() {
    const models = {
      Toyota: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius'],
      Honda: ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey']
    };
    
    const modelSelect = document.querySelector('select[name="model"]');
    modelSelect.innerHTML = '<option value="">All Models</option>';
    
    if (models[this.value]) {
      models[this.value].forEach(model => {
        modelSelect.appendChild(new Option(model, model));
      });
    }
  }