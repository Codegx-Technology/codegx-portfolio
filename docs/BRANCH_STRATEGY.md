# 🌿 Branch Strategy

**Date**: October 18, 2025 - 7:45 PM  
**Status**: ✅ ACTIVE

---

## 📊 **Branch Structure**

### **1. `main` Branch** 🚀
- **Purpose**: Production-ready code
- **Deployment**: Auto-deploys to Netlify
- **URL**: https://codegxtechnologies.org
- **Status**: Live and stable
- **Protection**: Only merge from `development` or `portfolio` when ready

### **2. `development` Branch** 🔧
- **Purpose**: Active development (without portfolio)
- **Status**: Portfolio features removed
- **Use**: Regular development work
- **Merge to**: `main` when features are ready

### **3. `portfolio` Branch** 🎨
- **Purpose**: Portfolio development work
- **Status**: Contains all portfolio features
- **Use**: Work on portfolio-specific features
- **Merge to**: `main` when portfolio is complete

---

## 🔄 **Workflow**

### **Regular Development (No Portfolio)**
```bash
# Switch to development branch
git checkout development

# Make your changes
git add .
git commit -m "feat: your feature"
git push origin development

# When ready for production
git checkout main
git merge development
git push origin main
```

### **Portfolio Development**
```bash
# Switch to portfolio branch
git checkout portfolio

# Make your portfolio changes
git add .
git commit -m "feat: portfolio feature"
git push origin portfolio

# When portfolio is ready for production
git checkout main
git merge portfolio
git push origin main
```

### **Checking Current Branch**
```bash
git branch
# * indicates current branch
```

### **Viewing All Branches**
```bash
git branch -a
```

---

## 📝 **Current State**

### **`main` Branch**
- ✅ Production code
- ✅ Latest service carousel updates
- ✅ Enterprise AI Solutions image
- ✅ All optimizations complete

### **`development` Branch**
- ✅ Portfolio removed
- ✅ Ready for regular development
- ✅ Synced with main (except portfolio)

### **`portfolio` Branch**
- ✅ Contains all portfolio work
- ✅ Includes `/portfolio` route
- ✅ Portfolio nav links present
- ✅ Ready for portfolio development

---

## 🎯 **Why This Strategy?**

### **Benefits:**
1. **Separation of Concerns**
   - Portfolio work isolated from main development
   - Easy to work on different features

2. **Flexibility**
   - Switch between branches anytime
   - No conflicts between portfolio and regular work

3. **Production Control**
   - Choose when to deploy portfolio
   - Keep main branch stable

4. **Clean History**
   - Clear separation of portfolio vs regular commits
   - Easy to track changes

---

## ⚠️ **Important Notes**

### **Before Switching Branches:**
```bash
# Always commit or stash your changes
git status
git add .
git commit -m "your message"
# OR
git stash
```

### **Syncing Branches:**
```bash
# Update development with main changes
git checkout development
git merge main

# Update portfolio with main changes
git checkout portfolio
git merge main
```

### **Resolving Conflicts:**
If you get merge conflicts:
1. Git will mark conflicted files
2. Open files and resolve conflicts
3. `git add` resolved files
4. `git commit` to complete merge

---

## 🚀 **Quick Reference**

| Task | Command |
|------|---------|
| Switch to portfolio | `git checkout portfolio` |
| Switch to development | `git checkout development` |
| Switch to main | `git checkout main` |
| See current branch | `git branch` |
| Create new branch | `git checkout -b branch-name` |
| Delete local branch | `git branch -d branch-name` |
| Push branch | `git push origin branch-name` |

---

## 📋 **Removed from Development Branch**

### **Files Modified:**
1. **`client/src/App.tsx`**
   - Removed `PersonalPortfolio` import
   - Removed `/portfolio` route
   - Added comments for clarity

2. **`client/src/components/navbar.tsx`**
   - Removed Portfolio nav link (desktop)
   - Removed Portfolio nav link (mobile)
   - Added comments for clarity

### **Still Available in Portfolio Branch:**
- All portfolio pages
- Portfolio routes
- Portfolio navigation
- Portfolio components

---

## ✅ **Summary**

Your repository now has a clean, professional branching strategy:

- **`main`**: Production code (live on Netlify)
- **`development`**: Regular development (no portfolio)
- **`portfolio`**: Portfolio development (isolated)

**Current Branch**: `development`

**To work on portfolio**: `git checkout portfolio`

**To deploy portfolio**: Merge `portfolio` → `main`

---

**All branches are synced and ready for development!** 🎊
